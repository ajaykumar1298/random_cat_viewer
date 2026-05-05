import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCat = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://api.freeapi.app/api/v1/public/cats/cat/random",
      );
      setCat(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  //  rating bar
  const RatingBar = ({ label, value }) => (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>{label}</span>
        <span>{value}/5</span>
      </div>
      <div className="w-full bg-gray-700 h-2 rounded">
        <div
          className="bg-green-500 h-2 rounded"
          style={{ width: `${(value / 5) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 shadow-md sticky top-0">
        <div className="text-xl font-bold text-green-400">
          🐈 Random Cat Viewer
        </div>

        <button
          onClick={fetchCat}
          className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600"
        >
          New Cat
        </button>
      </div>

      <div className="flex justify-center items-center p-6">
        {loading ? (
          <p className="text-gray-400">Loading cat...</p>
        ) : cat ? (
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg max-w-md w-full">
            {/* Image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-64 object-cover"
            />

            {/* Info */}
            <div className="p-4">
              <h2 className="text-xl font-bold">{cat.name}</h2>

              <p className="text-sm text-gray-400 mt-1">{cat.description}</p>

              <div className="mt-3 space-y-1 text-sm text-gray-300">
                <p>
                  <b>Origin:</b> {cat.origin}
                </p>
                <p>
                  <b>Life Span:</b> {cat.life_span} years
                </p>
                <p>
                  <b>Temperament:</b> {cat.temperament}
                </p>
              </div>

              {/* Ratings */}
              <div className="mt-4 space-y-3">
                <RatingBar label="Adaptability" value={cat.adaptability} />
                <RatingBar
                  label="Affection Level"
                  value={cat.affection_level}
                />
                <RatingBar label="Child Friendly" value={cat.child_friendly} />
                <RatingBar label="Dog Friendly" value={cat.dog_friendly} />
                <RatingBar label="Energy Level" value={cat.energy_level} />
                <RatingBar label="Grooming" value={cat.grooming} />
                <RatingBar label="Health Issues" value={cat.health_issues} />
                <RatingBar label="Intelligence" value={cat.intelligence} />
                <RatingBar label="Shedding Level" value={cat.shedding_level} />
                <RatingBar label="Social Needs" value={cat.social_needs} />
                <RatingBar
                  label="Stranger Friendly"
                  value={cat.stranger_friendly}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
