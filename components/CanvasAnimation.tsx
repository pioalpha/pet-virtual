"use client";
import { useEffect, useRef } from 'react';
import { AnimationConfig, SpriteConfig } from '../types/animation';
import { useSearchParams } from 'next/navigation';

interface CanvasAnimationProps {
  spritesheet: string;
  sprites: SpriteConfig;
  animations: AnimationConfig;
}

const CanvasAnimation = ({ spritesheet, sprites, animations }: CanvasAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationQueue = useRef<string[]>([]);
  const currentAnimation = useRef<string | null>(null);
  const loopCount = useRef<number>(0);
  const frameRequestId = useRef<number>(0);
  const animationActive = useRef<boolean>(false);

      const searchParams = useSearchParams();
      const clientId = searchParams.get('clientId');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.imageSmoothingEnabled = false;
    ctx.scale(10,10);

    const img = new Image();
    img.src = spritesheet;

    const playAnimation = (name: string) => {
      const animation = animations[name];
      if (!animation) return;

      currentAnimation.current = name;
      loopCount.current = 0;
      animationActive.current = true;

      const animate = (frameIndex: number, startTime: number) => {
        if (!animationActive.current) return;

        const frame = animation.quadros[frameIndex];
        if (!frame) return;

        const now = Date.now();
        const elapsed = now - startTime;

        if (elapsed >= frame.duracao) {
          frameIndex = (frameIndex + 1) % animation.quadros.length;
          
          if (frameIndex === 0) {
            loopCount.current++;
            
            // Lógica modificada para tratamento do loop
            if (animation.loop > 0 && loopCount.current >= animation.loop) {
              if (animation.acao) {
                animationQueue.current.push(animation.acao);
              }
              animationActive.current = false;
              currentAnimation.current = null;
              processQueue();
              return;
            }
          }
          startTime = now;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        frame.imagens.forEach(({ imagem, posX, posY }) => {
          const sprite = sprites[imagem];
          if (sprite && img.complete) {
            ctx.drawImage(
              img,
              sprite.posX,
              sprite.posY,
              sprite.larg,
              sprite.alt,
              posX,
              posY,
              sprite.larg,
              sprite.alt
            );
          }
        });

        frameRequestId.current = requestAnimationFrame(() => animate(frameIndex, startTime));
      };

      animate(0, Date.now());
    };

    const processQueue = () => {
      if (animationQueue.current.length > 0) {
        // Interrompe animações infinitas
        if (currentAnimation.current) {
          const currentAnim = animations[currentAnimation.current];
          if (currentAnim?.loop === 0) {
            animationActive.current = false;
            if (frameRequestId.current) {
              cancelAnimationFrame(frameRequestId.current);
            }
            currentAnimation.current = null;
          }
        }

        if (!currentAnimation.current) {
          const next = animationQueue.current.shift()!;
          playAnimation(next);
        }
      }
    };

    const eventSource = new EventSource(`/api/sse/?clientId=${clientId}`);
    eventSource.onmessage = (e) => {
      const { type, animation } = JSON.parse(e.data);
      if (type === 'triggerAnimation') {
        animationQueue.current.push(animation);
        console.log(`Fila de animação: ${animationQueue.current.length}`)
        processQueue();
      }
    };

    return () => {
      eventSource.close();
      animationActive.current = false;
      if (frameRequestId.current) {
        cancelAnimationFrame(frameRequestId.current);
      }
    };
  }, [animations, sprites, spritesheet, clientId]);

  return <canvas ref={canvasRef} width="400" height="400" className="border-2 border-gray-200" />;
};

export default CanvasAnimation;