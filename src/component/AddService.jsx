import React, { useEffect, useState } from "react";

const AddService = () => {
  const [categories, setCategories] = useState([]);
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [loading, setLoading] = useState(false); // NEW state for loading

  useEffect(() => {
    fetch("https://backend-999h.onrender.com/service/")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const handleAddService = async () => {
    if (!serviceName || !serviceDescription || !selectedCategory || !servicePrice) {
      return alert("Please fill in all fields!");
    }

    let userId = localStorage.getItem("userId");
    if (!userId) {
      alert("User ID not found. Please log in again.");
      return;
    }

    setLoading(true); // Start loading

    try {
      // Step 1: Create category
      const categoryRes = await fetch("https://backend-999h.onrender.com/service-category/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: selectedCategory }),
      });

      const categoryData = await categoryRes.json();
      const categoryId = categoryData.id;

      // Step 2: Create the service
      const response = await fetch("https://backend-999h.onrender.com/service/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          providerId: userId,
          name: serviceName,
          description: serviceDescription,
          categoryId: categoryId,
          price: parseFloat(servicePrice),
        }),
      });

      if (response.ok) {
        alert("Service added successfully!");
        window.location.href = "/service-provider-panel/service-list";
      } else {
        alert("Failed to add service.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false); // Stop loading (in case of failure)
    }
  };

  return (
    <div className="container mt-4">
      <h3>Add New Service</h3>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Service Name"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Service Description"
          value={serviceDescription}
          onChange={(e) => setServiceDescription(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Service category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Price"
          value={servicePrice}
          onChange={(e) => setServicePrice(e.target.value)}
        />
      </div>

      <button
        className="btn btn-primary"
        onClick={handleAddService}
        disabled={loading} // disable button while loading
      >
        {loading ? "Loading..." : "Add Service"}
      </button>
    </div>
  );
};

export { AddService };
