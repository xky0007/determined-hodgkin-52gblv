import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Bar } from '@antv/g2plot';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data = [
  { year: '1951 年', sales: 38 },
  { year: '1952 年', sales: 52 },
  { year: '1956 年', sales: 61 },
  { year: '1957 年', sales: 145 },
  { year: '1958 年', sales: 48 },
];

const bar = new Bar('container', {
  data,
  xField: 'sales',
  yField: 'year',
  seriesField: 'year',
});

bar.render();
  return (
    <>
      <div id="container"></div>

    </>
  );
}
