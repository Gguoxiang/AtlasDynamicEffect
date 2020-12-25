<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
export default {
  name: "about",
  mounted() {
    this.initG6();
  },
  methods: {
    initG6() {
      const data = {
        nodes: [
          {
            id: "0",
            label: "0"
          },
          {
            id: "1",
            label: "1"
          },
          {
            id: "2",
            label: "2"
          },
          {
            id: "3",
            label: "3"
          },
          {
            id: "4",
            label: "4"
          },
          {
            id: "5",
            label: "5"
          },
          {
            id: "6",
            label: "6"
          },
          {
            id: "7",
            label: "7"
          },
          {
            id: "8",
            label: "8"
          },
          {
            id: "9",
            label: "9"
          },
          {
            id: "10",
            label: "10"
          },
          {
            id: "11",
            label: "11"
          },
          {
            id: "12",
            label: "12"
          },
          {
            id: "13",
            label: "13"
          },
          {
            id: "14",
            label: "14"
          },
          {
            id: "15",
            label: "15"
          }
        ],
        edges: [
          {
            source: "0",
            target: "1"
          },
          {
            source: "0",
            target: "2"
          },
          {
            source: "0",
            target: "3"
          },
          {
            source: "0",
            target: "4"
          },
          {
            source: "0",
            target: "5"
          },
          {
            source: "1",
            target: "6"
          },
          {
            source: "1",
            target: "7"
          },
          {
            source: "1",
            target: "8"
          },
          {
            source: "2",
            target: "7"
          },
          {
            source: "2",
            target: "9"
          },
          {
            source: "3",
            target: "7"
          },
          {
            source: "3",
            target: "15"
          },
          {
            source: "4",
            target: "9"
          },
          {
            source: "4",
            target: "10"
          },
          {
            source: "4",
            target: "11"
          },
          {
            source: "4",
            target: "12"
          },
          {
            source: "5",
            target: "8"
          },
          {
            source: "5",
            target: "13"
          },
          {
            source: "5",
            target: "14"
          },
          {
            source: "5",
            target: "15"
          }
        ]
      };
      const container = document.getElementById("container");
      const width = container.scrollWidth;
      const height = container.scrollHeight || 500;
      const graph = new G6.Graph({
        container: "container",
        width,
        height,
        fitView: true,
        modes: {
          default: [
            "drag-canvas",
            "drag-node",
            // 提示框
            {
              type: "tooltip",
              formatText(model) {
                // 提示框文本内容
                const text = "label: " + model.label + "<br/> id: " + model.id;
                return text;
              }
            }
          ]
        },
        layout: {
          type: "dagre",
          rankdir: "LR",
          align: "DL",
          nodesepFunc: () => 1,
          ranksepFunc: () => 1,
          ranksep: 500 //层间距（px）
        },
        defaultNode: {
          size: [30, 20],
          type: "rect",
          style: {
            lineWidth: 2,
            stroke: "#5B8FF9",
            fill: "#C6E5FF"
          }
        },
        defaultEdge: {
          size: 1,
          color: "#e2e2e2",
          style: {
            endArrow: {
              path: "M 0,0 L 8,4 L 8,-4 Z",
              fill: "#e2e2e2"
            }
          }
        },
        // 节点在各状态下的样式
        nodeStateStyles: {
          // hover 状态为 true 时的样式
          hover: {
            fill: "lightsteelblue" // 样式属性，元素的填充色
          },
          // click 状态为 true 时的样式
          click: {
            stroke: "#000",
            lineWidth: 1
          }
        }
      });
      graph.data(data);
      graph.render();

      // 监听鼠标进入节点
      graph.on("node:mouseenter", e => {
        const nodeItem = e.item;
        // 设置目标节点的 hover 状态 为 true
        graph.setItemState(nodeItem, "hover", true);
      });
      // 监听鼠标离开节点
      graph.on("node:mouseleave", e => {
        const nodeItem = e.item;
        // 设置目标节点的 hover 状态 false
        graph.setItemState(nodeItem, "hover", false);
      });
      // 监听鼠标点击节点
      graph.on("node:click", e => {
        // 先将所有当前有 click 状态的节点的 click 状态置为 false
        const clickNodes = graph.findAllByState("node", "click");
        clickNodes.forEach(cn => {
          graph.setItemState(cn, "click", false);
        });
        const nodeItem = e.item;
        // 设置目标节点的 click 状态 为 true
        graph.setItemState(nodeItem, "click", true);
      });
      // 监听鼠标点击节点
      graph.on("edge:click", e => {
        // 先将所有当前有 click 状态的边的 click 状态置为 false
        const clickEdges = graph.findAllByState("edge", "click");
        clickEdges.forEach(ce => {
          graph.setItemState(ce, "click", false);
        });
        const edgeItem = e.item;
        // 设置目标边的 click 状态 为 true
        graph.setItemState(edgeItem, "click", true);
      });
      if (typeof window !== "undefined")
        window.onresize = () => {
          if (!graph || graph.get("destroyed")) return;
          if (!container || !container.scrollWidth || !container.scrollHeight)
            return;
          graph.changeSize(container.scrollWidth, container.scrollHeight);
        };
    }
  }
};
</script>
<style lang="less">
/* 提示框的样式 */
.g6-tooltip {
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  font-size: 12px;
  color: #545454;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px 8px;
  box-shadow: rgb(174, 174, 174) 0px 0px 10px;
}
</style>
