import React, { useEffect, useState } from "react";

const AddService = () => {
  const [categories, setCategories] = useState([]);
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [servicePrice, setServicePrice] = useState("");

  // Fetch categories on mount
  useEffect(() => {
    fetch(" https://backend-999h.onrender.com/service/") //servicecategory
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
  
    // Step 1: Create category (or check if exists - optional)
    const categoryRes = await fetch(" https://backend-999h.onrender.com/service-category/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: selectedCategory }),
    });
  
    const categoryData = await categoryRes.json();
    const categoryId = categoryData.id;
  
    // Step 2: Create the service
    const response = await fetch(" https://backend-999h.onrender.com/service/", {
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

      {/* <div className="mb-3">
        <select
          className="form-control"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.category.name}
            </option>
          ))}
        </select>
      </div> */}

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

      <button className="btn btn-primary" onClick={handleAddService}>
        Add Service
      </button>
    </div>
  );
};

export { AddService };
