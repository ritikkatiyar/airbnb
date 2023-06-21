"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
import { searchResults } from "@/assets/exploreData";

const Search = () => {
  
  const searchParams = useSearchParams();
  const router = useRouter();

  // es6 destructuring
  const { location, startDate, endDate, noOfGuests } = Object.fromEntries(
    searchParams.entries()
  );
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  // console.log(location)

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays-{range}-for {noOfGuests} Guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

// export async function getServerSideProps() {
//   try {
//     const searchResults = await axios.get("https://www.jsonkeeper.com/b/5NPS");
//     return {
//       props: {
//         searchResults: searchResults,
//       },
//     };
//   } catch (err) {
//     console.log(err);
//     return { props: {
//       searchResults: null,
//     } };
//   }
// }
