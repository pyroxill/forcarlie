import { useDrag } from 'react-dnd';
import { cn } from '@/lib/utils';

interface PuzzlePieceProps {
  id: string;
  initialSize: 'small' | 'large';
  position?: { x: number; y: number };
  pieceNumber?: number;
}

export function PuzzlePiece({ id, initialSize, position, pieceNumber }: PuzzlePieceProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'puzzle-piece',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  // Extract the number from the piece ID if pieceNumber is not provided
  const getImagePath = (number?: number) => {
    if (!number) {
      number = parseInt(id.replace('Piece ', ''));
    }
    const imageMapping: { [key: number]: string } = {
      1: '/lovable-uploads/931af360-019c-4de1-b058-20570acc8883.png',
      2: '/lovable-uploads/72ee4165-cb3d-49f3-9d5a-96fd994f92c1.png',
      3: '/lovable-uploads/76e55ce5-330f-4a0a-95c8-8a3f2a9c449f.png',
      4: '/lovable-uploads/71eb8d54-dfa7-4b55-83fe-bd8a8f00df4e.png',
      5: '/lovable-uploads/5e5e478c-0365-477d-9956-32539abc0815.png',
      6: '/lovable-uploads/59575ba7-1a5e-454f-a849-9e942e8b9ce6.png',
      7: '/lovable-uploads/2bb51a96-d0c1-471e-ad22-02495638dc48.png',
      8: '/lovable-uploads/9676ea56-3810-4e87-adac-ff22942626c8.png',
      9: '/lovable-uploads/ab684a84-2369-4a5a-94aa-c7ad974a57d5.png',
    };
    return imageMapping[number];
  };

  const CELL_WIDTH = 414 / 3;
  const CELL_HEIGHT = 736 / 3;

  return (
    <div
      ref={drag}
      className={cn(
        'cursor-move transition-all duration-300',
        isDragging ? 'opacity-50' : 'opacity-100',
        position ? 'absolute' : 'relative'
      )}
      style={{
        width: initialSize === 'small' ? '100px' : `${CELL_WIDTH}px`,
        height: initialSize === 'small' ? '100px' : `${CELL_HEIGHT}px`,
        ...(position && {
          left: position.x,
          top: position.y,
        })
      }}
    >
      <img
        src={getImagePath(pieceNumber)}
        alt={`Puzzle piece ${pieceNumber || id.replace('Piece ', '')}`}
        className="w-full h-full object-cover"
        draggable={false}
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
}