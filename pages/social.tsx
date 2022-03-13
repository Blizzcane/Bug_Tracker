import { useEffect, useState } from "react";

export default function Social() {
  const [subs, setSubs] = useState(6000);
  useEffect(() => {
    const interval = setInterval(() => {
      setSubs((subs) => subs + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
    console.log(subs);
  return <h1>Subs: {subs}</h1>;
}
