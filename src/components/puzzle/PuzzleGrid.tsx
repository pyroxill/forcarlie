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
  const GRID_WIDTH = 414;
  const GRID_HEIGHT = 736;
  const CELL_WIDTH = GRID_WIDTH / 3;
  const CELL_HEIGHT = GRID_HEIGHT / 3;

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'puzzle-piece',
    drop: (item: { id: string }, monitor) => {
      const offset = monitor.getClientOffset();
      const gridElement = document.getElementById('puzzle-grid');
      
      if (offset && gridElement) {
        const gridRect = gridElement.getBoundingClientRect();
        const x = offset.x - gridRect.left;
        const y = offset.y - gridRect.top;
        
        // Calculate the grid cell position
        const cellX = Math.floor(x / CELL_WIDTH) * CELL_WIDTH;
        const cellY = Math.floor(y / CELL_HEIGHT) * CELL_HEIGHT;
        
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
        'relative mx-auto rounded-lg transition-colors overflow-hidden',
        isOver ? 'bg-white/10' : 'bg-white/5'
      )}
      style={{
        width: `${GRID_WIDTH}px`,
        height: `${GRID_HEIGHT}px`,
        display: 'grid',
        gridTemplateColumns: `repeat(3, ${CELL_WIDTH}px)`,
        gridTemplateRows: `repeat(3, ${CELL_HEIGHT}px)`,
        gap: '0'
      }}
    >
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