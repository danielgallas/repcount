import axios from "axios";

const FetchData = () => {
  const url = "http://localhost:8000/api/v1/reps";
  const pastWeek = [];
  const days = [0, 1, 2, 3, 4, 5, 6];

  const mapData = async (days) => {
    days.map(async (item) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      today.setDate(today.getDate() - item);
      const formattedDate = today.toISOString("YYYY-MM-DD");
      const url2 = url + "/" + formattedDate;
      const grab = await axios.get(url2);
      pastWeek.push(grab.data);
    });
  };
  mapData(days);
  return pastWeek;
};

export default FetchData;
