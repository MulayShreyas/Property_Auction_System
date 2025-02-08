import { Container, Heading } from "../../Routes";
import { useAuctionData } from "../../Utils/Data";
import { ProductCard } from "../cards/ProductCard";
import { useNavigate } from "react-router-dom";

export const UpcomingAuction = () => {
  const { auctions, loading, error } = useAuctionData();
  const navigate = useNavigate();

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const upcomingAuctions = auctions
    ?.filter((auction) => auction.status === "Upcoming")
    ?.slice(0, 8);

  return (
    <section className="upcoming-auctions bg-gray-100 py-12">
      <Container className="w-full mx-auto px-6">
        <div className="text-center mb-6">
          <br></br>
          <br></br><br></br>
          <Heading
            title="Upcoming Auctions"
            subtitle="Discover exclusive properties that will soon be available for bidding."
            className="text-center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {upcomingAuctions.map((auction) => (
            <div className="w-full max-w-sm"> {/* Ensures uniform width */}
              <ProductCard item={auction} key={auction.id} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/auction/upcoming")}
            className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-md transition-transform transform hover:scale-105 hover:bg-purple-700"
          >
            View All Upcoming Auctions →
          </button>
        </div>
      </Container>
    </section>
  );
};
