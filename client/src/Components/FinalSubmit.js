import React from "react";
import axios from "axios";

const FinalSubmit = ({ exercise }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const formattedDate = today.toISOString("YYYY-MM-DD");
  // console.log(formattedDate);
  const todayData = { date: formattedDate, reps: exercise };
  const url = "http://localhost:8000/api/v1/reps";

  const submit = async (data) => {
    const url2 = url + "/" + data.date;
    console.log(url2);
    const fetchData = await axios.get(url2);
    console.log("HERE:");
    console.log(fetchData.data);
    if (fetchData.data === "") {
      await axios.post(url, data);
      console.log("CREATED");
    } else {
      const newUrl = url + "/" + formattedDate;
      console.log(newUrl);
      await axios.put(newUrl, data);
      console.log("UPDATED");
      console.log(data.date);
      console.log(todayData.reps);
    }
    console.log("DONE");
  };

  return (
    <div className="grid-item-button">
      <div className="flex-container" onClick={() => submit(todayData)}>
        FinalSubmit {todayData.date}
      </div>
    </div>
  );
};

export default FinalSubmit;
