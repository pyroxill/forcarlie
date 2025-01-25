import { useDrop } from 'react-dnd';
import { PuzzlePiece } from './PuzzlePiece';
import { cn } from '@/lib/utils';

interface PuzzleGridProps {
  onPiecePlaced: (pieceId: string, x: number, y: number) => void;
  placedPieces: {
    [key: string]: { x: number; y: number };
  };
}

export function PuzzleGrid({ onPiecePlaced, placedPieces }: PuzzleGridProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'puzzle-piece',
    drop: (item: { id: string }, monitor) => {
      const offset = monitor.getClientOffset();
      const gridElement = document.getElementById('puzzle-grid');
      
      if (offset && gridElement) {
        const gridRect = gridElement.getBoundingClientRect();
        const x = offset.x - gridRect.left;
        const y = offset.y - gridRect.top;
        
        const cellWidth = 414 / 3;  // Image width divided by 3
        const cellHeight = 736 / 3;  // Image height divided by 3
        const cellX = Math.floor(x / cellWidth) * cellWidth;
        const cellY = Math.floor(y / cellHeight) * cellHeight;
        
        onPiecePlaced(item.id, cellX, cellY);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      id="puzzle-grid"
      ref={drop}
      className={cn(
        'relative w-[414px] h-[736px] mx-auto rounded-lg transition-colors',
        'grid grid-cols-3 grid-rows-3',
        isOver ? 'bg-white/10' : 'bg-white/5'
      )}
      style={{ touchAction: 'none' }}
    >
      {/* Grid cells */}
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className="relative"
          style={{
            width: `${414/3}px`,
            height: `${736/3}px`
          }}
        />
      ))}
      
      {/* Placed pieces */}
      {Object.entries(placedPieces).map(([pieceId, position]) => (
        <PuzzlePiece
          key={pieceId}
          id={pieceId}
          initialSize="large"
          position={position}
        />
      ))}
    </div>
  );
}