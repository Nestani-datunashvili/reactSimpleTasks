// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [timeLeft, setTimeLeft] = useState(10);
//   const [isRunning, setIsRunning] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     // let interval;
//     if (isRunning && timeLeft > 0) {
//       setInterval(() => {
//         setTimeLeft((prevTime) => prevTime - 1);
//       }, 1000);
//     }
//     return () =>
//       clearInterval(
//         setInterval(() => {
//           setTimeLeft((prevTime) => prevTime - 1);
//         }, 1000)
//       );
//   }, [isRunning, timeLeft]);

//   const handleStartPause = () => {
//     if (isRunning) {
//       setIsRunning(false);
//       setIsPaused(true);
//     } else {
//       setIsRunning(true);
//       setIsPaused(false);
//     }
//   };

//   const handleReset = () => {
//     setTimeLeft(10);
//     setIsRunning(false);
//     setIsPaused(false);
//   };
//   return (
//     <div>
//       <div>{timeLeft}</div>
//       <button onClick={handleStartPause}>
//         {isRunning ? "Pause" : isPaused ? "Resume" : "Start"}
//       </button>
//       <button onClick={handleReset}>reset</button>
//     </div>
//   );
// };

// export default App;

// =========================

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [data, setData] = useState(null);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       setData(data);
//     } catch (err) {
//       console.log("Fetch error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleRefresh = () => {
//     setData(null);
//     fetchData();
//   };

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <button onClick={handleRefresh}>Refresh</button>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default App;

// =========================
// import React, { useState } from "react";

// const products = [
//   { id: 1, name: "apple", category: "fruit" },
//   { id: 2, name: "bannana", category: "fruit" },
//   { id: 3, name: "carrot", category: "vegitable" },
//   { id: 4, name: "cucumber", category: "vegitable" },
//   { id: 5, name: "lemon", category: "fruit" },
// ];

// const App = () => {
//   const [category, setCategory] = useState("all");

//   const categories = ["all", "fruit", "vegitable"];
//   const filteredProducts =
//     category === "all"
//       ? products
//       : products.filter((product) => product.category === category);

//   return (
//     <div>
//       <h1>Products</h1>
//       <select onChange={(e) => setCategory(e.target.value)} value={category}>
//         {categories.map((cat) => (
//           <option key={cat} value={cat}>
//             {cat}
//           </option>
//         ))}
//       </select>
//       <ul>
//         {filteredProducts.map((product) => (
//           <li key={product.id}>
//             {product.name} - {product.category}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

// // ===============
// import React, { useState } from "react";

// const cities = [
//   { name: "თბილისი", population: 1130000 },
//   { name: "ქუთაისი", population: 147000 },
//   { name: "ბათუმი", population: 157000 },
//   { name: "ზუგდიდი", population: 74900 },
//   { name: "რუსთავი", population: 125000 },
// ];

// const App = () => {
//   const [selectedCity, setSelectedCity] = useState(null);

//   const handleCityChange = (event) => {
//     const selectedCityName = event.target.value;
//     const city = cities.find((city) => city.name === selectedCityName);
//     setSelectedCity(city);
//   };

//   return (
//     <div>
//       <select
//         onChange={handleCityChange}
//         value={selectedCity ? selectedCity.name : ""}
//       >
//         {cities.map((city, index) => (
//           <option key={index} value={city.name}>
//             {city.name}
//           </option>
//         ))}
//       </select>
//       {selectedCity && (
//         <div>
//           <h3>Selected City:</h3>
//           <p>
//             {selectedCity.name} - {selectedCity.population} მაცხოვრებელი
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

// ==========
// import React, { useState, useEffect } from "react";

// const ApiDataComponent = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts"
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>დატვირთვა...</div>;
//   }

//   if (error) {
//     return <div>შეცდომა: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>მონაცემები JSON ფორმატში:</h1>
//       <div>{JSON.stringify(data)}</div>
//     </div>
//   );
// };

// export default ApiDataComponent;

// ============

// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return (
//     <div>
//       <div>
//         <h1>{time.toLocaleTimeString()}</h1>
//       </div>
//     </div>
//   );
// };

// export default App;

// ============
