import FullStarPic from './../assets/img/star_full.png'
import EmptyStarPic from './../assets/img/star_empty.png'

interface RatingStarsProps {
  rating: string;
}

function StarRating({ rating } :RatingStarsProps) {
  // Random key pour les stars
const generateKey = () => {
  return Math.random().toString(36).substr(2, 9);
}

const FullStar = ({ customKey }: { customKey: string }) => {
  return <img src={FullStarPic} alt="Etoile pleine" key={customKey} />
}

const EmptyStar = ({ customKey }: { customKey: string }) => {
  return <img src={EmptyStarPic} alt="Etoile creuse" key={customKey} />
}

return (<div className='rating'>
{[...Array(5)].map((_, index) => {
  const numericRating = parseInt(rating)
  const customKey = generateKey()
  return index < numericRating ? (
    <FullStar key={customKey} customKey={customKey} />
  ) : (
    <EmptyStar key={customKey} customKey={customKey} />
  )
})}
</div>
)
}

export default StarRating