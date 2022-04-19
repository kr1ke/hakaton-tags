<template>
  <div class="home">
    <v-chart class="chart" :option="option" />
    {{tags}}
  </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import methods from "methods";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default {
  name: "Home",
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "white"
  },
  data() {
    return {
      option: {
        backgroundColor: "rgb(255,255,255)",
        title: {
          text: "Тэги",
          left: "center",
          color: "#000000"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
          backgroundColor: "rgb(255,255,255)"

        },
        legend: {
          backgroundColor: "rgb(255,255,255)",
          orient: "vertical",
          left: "left",
          color: "rgb(0,0,0)",
          data: [
            "Direct",
            "Email",
            "Ad Networks",
            "Video Ads",
            "Search Engines"
          ]
        },
        series: [
          {
            name: "Traffic Sources",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: this.tags,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0,0,0,0.5)",
                backgroundColor: "rgb(255,255,255)"
              }
            }
          }
        ]
      }
    };
  },
  mounted() {
    this.$store.dispatch('getAllTags')
  },
  computed: {
    tags() {
      let tags  = this.$store.getters.getTags
      console.log(tags)
      tags = tags.map((item) => {
        delete item.id
        return item
      })
      this.newArray(tags)
    }
  },
  methods: {
    newArray(tags) {
      let names = tags.map((item) => {
        return item.name
      })
      console.log(this.option.legend.data = names)
      this.option.series[0].data = tags
    }
  }
};
</script>

<style scoped lang="scss">
@import "src/assets/styles.scss";

.home {
  margin-left: size(700, 1920);
  width: size(500, 1920);
  height: size(500,1920);
}
</style>
