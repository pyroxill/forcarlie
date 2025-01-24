import { useDrop } from 'react-dnd';
import { PuzzlePiece } from './PuzzlePiece';

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
        onPiecePlaced(item.id, x, y);
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
        'border-4 border-dashed',
        isOver ? 'border-white/50 bg-white/10' : 'border-white/20 bg-white/5',
      )}
    >
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