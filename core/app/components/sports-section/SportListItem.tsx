import { SportType } from './SportList';


interface SportProps {
    sport: SportType
}

const SportListItem: React.FC<SportProps> = ({
  sport
}) => {
  return (
    <div>
      <a key={sport.id_sport} href={''} className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={sport.pictogram_url}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-3 text-lg font-medium text-gray-900 text-center">{sport.name}</h3>
      </a>
    </div>
  )
}

export default SportListItem