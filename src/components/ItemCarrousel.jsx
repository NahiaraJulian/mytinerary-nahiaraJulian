const ItemCarrousel = ({city}) => {
  return (
    <article className="w-2/5 rounded-md bg-orange-500 pb-2">
      <img src={city.image} alt={"Image of " + city.name} className="w-full h-40 rounded-t-md object-cover sm:h-48 md:h-56 lg:h-64" />
      <footer className="flex flex-col items-center text-white">
        <h4 className="font-semibold text-xl line-clamp-1"> {city.name} </h4>
        <p className="line-clamp-1" > {city.country} </p>
      </footer>
    </article>
  )
}

export default ItemCarrousel;