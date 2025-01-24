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
        
        // Calculate which cell in the 3x3 grid the piece was dropped in
        const cellWidth = gridRect.width / 3;
        const cellHeight = gridRect.height / 3;
        const cellX = Math.floor(x / cellWidth) * cellWidth + (cellWidth - 128) / 2;
        const cellY = Math.floor(y / cellHeight) * cellHeight + (cellHeight - 128) / 2;
        
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
        'relative w-full aspect-[4/3] rounded-lg transition-colors',
        'border-4 border-dashed grid grid-cols-3 grid-rows-3',
        isOver ? 'border-white/50 bg-white/10' : 'border-white/20 bg-white/5'
      )}
    >
      {/* Grid cells */}
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className="border border-white/10 relative"
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