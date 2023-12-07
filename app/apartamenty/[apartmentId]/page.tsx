import { apartmentsList } from "../apartmentsList";

export default function Page({ params }: { params: { apartmentId: string } }) {
  console.log(`Params =`);
  console.log(params);
  console.log(`Params slug =`);
  console.log(params.apartmentId);

  const apartment = apartmentsList[Number(params.apartmentId)];

  return <div>My Post: {params.apartmentId}</div>;
}
