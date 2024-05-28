type PokemonCardProps = {
  name: string;
  img: string;
};

export default function PokemonCard({ name, img }: PokemonCardProps) {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{name}</dd>

      <dt>Picture</dt>
      <dd>
        <img src={img} alt={name} />
      </dd>
    </dl>
  );
}
