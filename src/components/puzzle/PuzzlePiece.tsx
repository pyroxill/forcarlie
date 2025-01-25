import { useDrag } from 'react-dnd';
import { cn } from '@/lib/utils';

interface PuzzlePieceProps {
  id: string;
  initialSize?: 'small' | 'large';
  position?: { x: number; y: number };
}

export function PuzzlePiece({ id, initialSize = 'small', position }: PuzzlePieceProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'puzzle-piece',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const pieceNumber = id.split(' ')[1];
  
  const getImagePath = (number: string) => {
    const imageMapping: { [key: string]: string } = {
      '1': '/lovable-uploads/71eb8d54-dfa7-4b55-83fe-bd8a8f00df4e.png',
      '2': '/lovable-uploads/59575ba7-1a5e-454f-a849-9e942e8b9ce6.png',
      '3': '/lovable-uploads/ab684a84-2369-4a5a-94aa-c7ad974a57d5.png',
      '4': '/lovable-uploads/5e5e478c-0365-477d-9956-32539abc0815.png',
      '5': '/lovable-uploads/2bb51a96-d0c1-471e-ad22-02495638dc48.png',
      '6': '/lovable-uploads/d08f0ce6-0963-40f1-873e-3e2b4879817b.png',
      '7': '/lovable-uploads/9676ea56-3810-4e87-adac-ff22942626c8.png',
      '8': '/lovable-uploads/931af360-019c-4de1-b058-20570acc8883.png',
      '9': '/lovable-uploads/d6ba01db-521c-44f3-a9bd-623d59a2ca3e.png'
    };

    return imageMapping[number];
  };

  return (
    <div
      ref={drag}
      className={cn(
        'cursor-move transition-all duration-300',
        initialSize === 'small' ? 'w-24 h-24' : 'w-[150px] h-[150px]',
        isDragging ? 'opacity-50' : 'opacity-100',
        position ? 'absolute' : 'relative'
      )}
      style={{
        ...position && {
          left: position.x,
          top: position.y,
        }
      }}
    >
      <div className="w-full h-full relative">
        <img
          src={getImagePath(pieceNumber)}
          alt={`Puzzle piece ${pieceNumber}`}
          className="w-full h-full object-contain"
          draggable={false}
          onError={(e) => {
            console.error('Image failed to load:', e);
            console.log('Attempted to load:', getImagePath(pieceNumber));
          }}
        />
      </div>
    </div>
  );
}