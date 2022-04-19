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
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
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
