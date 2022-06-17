<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  width: {
    type: Number,
    default: 100,
  },
  strokeWidth: {
    type: Number,
    default: 8,
  },
  strokeColor: {
    type: String,
    default: "#3a4056",
  },
  innerStrokeColor: {
    type: String,
    default: "deeppink",
  },
  roundedStroke: {
    type: Boolean,
    default: false,
  },
  percent: {
    type: Number,
    default: 16,
  },
  textColor: {
    type: String,
    default: "#2e5090",
  },
  fontWeight: {
    type: Number,
    default: 500,
  },
  fontSize: {
    type: Number,
    default: 16,
  },
  clockwise: {
    type: Boolean,
    default: true,
  },
  showPercent: {
    type: Boolean,
    default: true,
  },
});

const radius = props.width / 2 - props.strokeWidth * 2;
const circumference = 2 * Math.PI * radius;

const offset = computed(() => {
  if (props.clockwise) {
    return circumference - (props.percent / 100) * circumference;
  } else {
    return circumference + (props.percent / 100) * circumference;
  }
});

const roundedPercent = computed(() => Math.round(props.percent));
</script>

<template>
  <svg :width="width" :height="width">
    <circle
      :cx="width / 2"
      :cy="width / 2"
      :r="radius"
      fill="transparent"
      :stroke="innerStrokeColor"
      :stroke-width="strokeWidth"
    />
    <circle
      :cx="width / 2"
      :cy="width / 2"
      :r="radius"
      fill="transparent"
      :stroke="strokeColor"
      :stroke-dasharray="circumference"
      :stroke-dashoffset="offset"
      :stroke-width="strokeWidth"
      :stroke-linecap="roundedStroke ? 'round' : 'butt'"
      class="c"
    />
    <text
      class="fill-current"
      x="50%"
      y="50%"
      :style="{
        color: `${textColor}`,
        fontWeight: fontWeight,
        fontSize: `${fontSize}px`,
      }"
      dominant-baseline="middle"
      text-anchor="middle"
      v-if="showPercent"
    >
      {{ roundedPercent }}%
    </text>
  </svg>
</template>

<style scoped>
.c {
  transform: rotate(-90deg);
  transform-origin: center;
  /* transition: 500ms stroke-dashoffset cubic-bezier(0.175, 0.885, 0.32, 1.275); */
  transition: 500ms stroke-dashoffset ease;
}
</style>
