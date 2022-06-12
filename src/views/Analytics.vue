<script setup lang="ts">
import { Chart, registerables } from "chart.js";
import { computed, ref } from "vue";
import { DoughnutChart, LineChart, PieChart } from "vue-chart-3";

Chart.register(...registerables);

const numberOfPartnersOnline = ref(70);

const numberOfPartnersOffine = ref(30);

const pieChartDataset = ref([
  numberOfPartnersOnline.value,
  numberOfPartnersOffine.value,
]);

const lineChartRef = ref();
const doughnutChartRef = ref();
const pieChartRef = ref();

const options = ref({
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
});

const lineChartData = computed(() => ({
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  datasets: [
    {
      label: "Product 1",
      data: [10, 50, 30, 40, 60, 70, 5, 30, 40, 60, 70, 5],

      fill: false,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
    },
    {
      label: "Product 2",
      data: [5, 25, 30, 40, 60, 45, 15, 70, 5, 45, 30, 10],

      fill: false,
      borderColor: "rgb(75, 192, 192)",
    },
    {
      label: "Product 3",
      data: [10, 2, 30, 50, 65, 30, 40, 15, 60, 70, 5, 20],
      backgroundColor: ["#77CEFF", "#0079AF", "#123E6B", "#97B0C4", "#A5C8ED"],
    },
  ],
}));

const doughnutChartData = computed(() => ({
  labels: ["Male", "Female"],
  datasets: [
    {
      data: [40, 60],
      backgroundColor: ["#77CEFF", "#0079AF"],
    },
  ],
}));

const pieChartData = computed(() => ({
  labels: ["Online", "Offline"],
  datasets: [
    {
      data: pieChartDataset.value,
      backgroundColor: ["#008000A6", "#FF0000A6"],
    },
  ],
}));

setInterval(() => {
  shuffleData();
}, 10000);

const shuffleData = () => {
  const x = Math.floor(Math.random() * 101);
  const y = Math.floor(Math.random() * 101);

  pieChartDataset.value = [x, y];
};
</script>

<template>
  <div class="px-4 mt-20 lg:px-10 md:mt-10 w-screen md:w-full">
    <p class="mb-5 text-2xl font-bold">Analytics</p>
    <div></div>
    <div></div>

    <div class="md:w-full grid gap-24">
      <div class="md:h-[305px] w-full">
        <p class="font-semibold mb-4">Products</p>

        <LineChart
          ref="lineChartRef"
          :chartData="lineChartData"
          :options="options"
        />
      </div>

      <div class="mt-16 lg:mb-32 grid sm:flex justify-around items-center">
        <div class="lg:h-[305px]">
          <p class="font-semibold mb-4">Gender</p>

          <DoughnutChart
            ref="doughnutChartRef"
            :chartData="doughnutChartData"
            :options="options"
          />
        </div>
        <div class="md:h-[305px]">
          <p class="font-semibold mb-4">Customers</p>

          <PieChart
            ref="pieChartRef"
            :chartData="pieChartData"
            :options="options"
          />
        </div>
      </div>
    </div>
  </div>
</template>
