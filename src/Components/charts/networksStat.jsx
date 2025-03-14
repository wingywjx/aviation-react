import ReactECharts from 'echarts-for-react';

const Degree = () => {
  const option = {
    dataset: [
      {
        source: [
          [1, 1.0],
          [2, 0.9519650655021835],
          [3, 0.8951965065502184],
          [4, 0.8515283842794761],
          [5, 0.794759825327511],
          [6, 0.7292576419213974],
          [7, 0.6943231441048036],
          [8, 0.6419213973799127],
          [9, 0.5982532751091704],
          [10, 0.5676855895196508],
          [11, 0.5414847161572054],
          [12, 0.5021834061135373],
          [13, 0.4672489082969434],
          [14, 0.4541484716157207],
          [15, 0.4454148471615722],
          [16, 0.4104803493449783],
          [17, 0.40611353711790404],
          [18, 0.39737991266375555],
          [19, 0.38864628820960706],
          [20, 0.37991266375545857],
          [21, 0.3668122270742359],
          [22, 0.34061135371179047],
          [23, 0.3275109170305678],
          [24, 0.31004366812227085],
          [25, 0.29694323144104817],
          [26, 0.2882096069868997],
          [27, 0.28384279475982543],
          [28, 0.2794759825327512],
          [29, 0.27510917030567694],
          [30, 0.24890829694323152],
          [31, 0.24017467248908306],
          [32, 0.2358078602620088],
          [34, 0.2227074235807861],
          [37, 0.21834061135371186],
          [39, 0.2096069868995634],
          [42, 0.20524017467248915],
          [43, 0.2008733624454149],
          [46, 0.19650655021834065],
          [47, 0.1877729257641922],
          [50, 0.18340611353711794],
        ],
      },
      {
        source: [
          [55, 0.1790393013100437],
          [56, 0.17467248908296945],
          [57, 0.1703056768558952],
          [58, 0.16157205240174674],
          [59, 0.1572052401746725],
          [60, 0.15283842794759825],
          [61, 0.148471615720524],
          [63, 0.14410480349344976],
          [64, 0.1397379912663755],
          [66, 0.13100436681222705],
          [68, 0.1266375545851528],
          [69, 0.12227074235807855],
          [70, 0.11353711790393008],
          [72, 0.10917030567685584],
          [73, 0.10480349344978161],
          [74, 0.10043668122270738],
          [76, 0.09606986899563315],
          [77, 0.09170305676855892],
          [78, 0.08296943231441045],
          [80, 0.07860262008733622],
          [82, 0.07423580786026199],
          [83, 0.06986899563318776],
          [84, 0.06550218340611352],
          [86, 0.05240174672489081],
          [89, 0.04803493449781658],
          [92, 0.04366812227074235],
          [93, 0.03930131004366812],
          [99, 0.034934497816593885],
          [103, 0.03056768558951965],
          [106, 0.026200873362445413],
          [116, 0.021834061135371178],
          [119, 0.017467248908296942],
          [128, 0.013100436681222707],
          [133, 0.008733624454148471],
          [143, 0.004366812227074236],
        ],
      },
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    xAxis: {
      name: 'k',
      type: 'log',
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    yAxis: {
      name: 'P(>k)',
      type: 'log',
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    series: [
      {
        name: 'scatter1',
        type: 'scatter',
        datasetIndex: 0,
      },
      {
        name: 'scatter2',
        type: 'scatter',
        datasetIndex: 1,
      },
    ],
  };
  return (
    <ReactECharts option={option} style={{ height: '350px', width: '100%' }} />
  );
};

const Cluster = () => {
  const option = {
    dataset: [
      {
        source: [
          [95, 0.37872340425531914],
          [12, 0.9393939393939394],
          [71, 0.4595573440643863],
          [92, 0.3795986622073579],
          [96, 0.362280701754386],
          [145, 0.21772030651340996],
          [90, 0.3480649188514357],
          [138, 0.23812546281603725],
          [46, 0.6492753623188405],
          [123, 0.24470211915233905],
          [143, 0.20053186250369348],
          [141, 0.225531914893617],
          [117, 0.32007073386383733],
          [73, 0.4741248097412481],
          [2, 0],
          [129, 0.2164486434108527],
          [4, 0.8333333333333334],
          [107, 0.2766707811673426],
          [106, 0.3142857142857143],
          [24, 0.5471014492753623],
          [4, 0.5],
          [22, 0.5974025974025974],
          [86, 0.43666210670314637],
          [52, 0.4479638009049774],
          [86, 0.3376196990424077],
          [9, 0.6388888888888888],
          [9, 0.8611111111111112],
          [86, 0.31108071135430915],
          [80, 0.41835443037974684],
          [15, 0.6095238095238096],
          [99, 0.3378684807256236],
          [126, 0.2537142857142857],
          [17, 0.7867647058823529],
          [14, 0.5604395604395604],
          [41, 0.5414634146341464],
          [8, 0.6071428571428571],
          [60, 0.488135593220339],
          [3, 0],
          [4, 0.8333333333333334],
          [86, 0.4339261285909713],
          [69, 0.5042625745950554],
          [20, 0.7368421052631579],
          [3, 0.6666666666666666],
          [2, 1.0],
          [1, 0],
          [6, 0.9333333333333333],
          [25, 0.7566666666666667],
          [5, 0.8],
          [6, 0.8],
          [5, 0.9],
          [35, 0.6352941176470588],
          [7, 1.0],
          [13, 0.47435897435897434],
          [59, 0.5113968439509059],
          [32, 0.7036290322580645],
          [3, 1.0],
          [17, 0.875],
          [7, 0.9047619047619048],
          [7, 0.9047619047619048],
          [23, 0.8221343873517787],
          [35, 0.7025210084033613],
          [4, 0.8333333333333334],
          [17, 0.8455882352941176],
          [23, 0.9090909090909091],
          [34, 0.8912655971479501],
          [31, 0.7677419354838709],
          [57, 0.6152882205513784],
          [7, 0.9523809523809523],
          [16, 0.5583333333333333],
          [73, 0.5243531202435312],
          [19, 0.8187134502923976],
          [41, 0.7426829268292683],
          [67, 0.5445499773857982],
          [10, 0.8222222222222222],
          [61, 0.5792349726775956],
          [33, 0.8958333333333334],
          [13, 0.8717948717948718],
          [6, 0.9333333333333333],
          [30, 0.8367816091954023],
          [8, 0.8571428571428571],
          [42, 0.667828106852497],
          [54, 0.5988819007686932],
          [27, 0.7692307692307693],
          [9, 0.9166666666666666],
          [16, 0.8583333333333333],
          [8, 0.8571428571428571],
          [13, 0.9230769230769231],
          [54, 0.5870020964360587],
          [6, 1.0],
          [6, 0.9333333333333333],
          [17, 0.9191176470588235],
          [7, 0.8095238095238095],
          [6, 0.6],
          [16, 0.7333333333333333],
          [66, 0.5631701631701632],
          [23, 0.7707509881422925],
          [8, 0.8571428571428571],
          [91, 0.4183150183150183],
          [24, 0.855072463768116],
          [10, 0.9111111111111111],
          [20, 0.8789473684210526],
          [11, 0.8363636363636363],
          [31, 0.7720430107526882],
          [7, 0.8095238095238095],
          [62, 0.6023268112109995],
          [80, 0.44240506329113927],
          [87, 0.3630045442395082],
          [32, 0.8709677419354839],
          [7, 0.8095238095238095],
          [1, 0],
          [37, 0.7657657657657657],
          [62, 0.5668958223162348],
          [23, 0.6956521739130435],
          [26, 0.7415384615384616],
          [9, 0.8333333333333334],
          [20, 0.6578947368421053],
          [8, 0.8571428571428571],
          [5, 1.0],
          [14, 0.8241758241758241],
          [8, 0.8214285714285714],
          [87, 0.3945469125902165],
          [38, 0.6486486486486487],
          [11, 0.8181818181818182],
          [31, 0.6645161290322581],
          [69, 0.48934356351236147],
          [10, 0.9111111111111111],
          [24, 0.8333333333333334],
          [21, 0.8571428571428571],
          [12, 0.8181818181818182],
          [82, 0.4610057211683228],
          [16, 0.9],
          [22, 0.8225108225108225],
          [11, 0.9090909090909091],
          [5, 0.9],
          [25, 0.7466666666666667],
          [5, 1.0],
          [28, 0.8465608465608465],
          [74, 0.5542391706775268],
          [59, 0.592051431911163],
          [15, 0.8095238095238095],
          [24, 0.8804347826086957],
          [24, 0.7463768115942029],
          [36, 0.7031746031746032],
          [23, 0.758893280632411],
          [18, 0.9019607843137255],
          [8, 0.9642857142857143],
          [34, 0.7718360071301248],
          [59, 0.6084161309175921],
          [29, 0.7857142857142857],
          [2, 1.0],
          [22, 0.7878787878787878],
          [5, 0.7],
          [5, 1.0],
          [6, 0.9333333333333333],
          [9, 0.75],
          [77, 0.38619275461380725],
          [59, 0.5347749853886616],
          [39, 0.7611336032388664],
          [7, 0.7142857142857143],
          [11, 0.8727272727272727],
          [8, 0.6071428571428571],
          [13, 0.7051282051282052],
          [30, 0.7517241379310344],
          [16, 0.875],
          [25, 0.8666666666666667],
          [16, 0.8416666666666667],
          [25, 0.89],
          [11, 0.8727272727272727],
          [23, 0.8142292490118577],
          [34, 0.857397504456328],
          [16, 0.8916666666666667],
          [2, 1.0],
          [15, 0.7142857142857143],
          [11, 0.7272727272727273],
          [15, 0.8857142857142857],
          [11, 0.9636363636363636],
          [19, 0.9064327485380117],
          [12, 0.9090909090909091],
          [7, 0.8571428571428571],
          [7, 0.8571428571428571],
          [14, 0.9010989010989011],
          [10, 0.8222222222222222],
          [18, 0.954248366013072],
          [6, 1.0],
          [5, 1.0],
          [1, 0],
          [14, 0.8901098901098901],
          [11, 0.8181818181818182],
          [4, 0.8333333333333334],
          [11, 0.8],
          [9, 0.75],
          [4, 0],
          [5, 0.8],
          [11, 0.6909090909090909],
          [10, 0.6888888888888889],
          [4, 0.8333333333333334],
          [15, 0.819047619047619],
          [14, 0.8131868131868132],
          [9, 0.6666666666666666],
          [3, 0.6666666666666666],
          [2, 1.0],
          [2, 1.0],
          [7, 0.9047619047619048],
          [5, 1.0],
          [4, 1.0],
          [6, 0.8],
          [4, 1.0],
          [6, 0.4666666666666667],
          [6, 0.7333333333333333],
          [8, 0.5714285714285714],
          [2, 0],
          [20, 0.868421052631579],
          [3, 1.0],
          [6, 0.9333333333333333],
          [1, 0],
          [7, 0.8571428571428571],
          [2, 1.0],
          [1, 0],
          [7, 0.9047619047619048],
          [3, 1.0],
          [4, 0.8333333333333334],
          [1, 0],
          [4, 0.8333333333333334],
          [2, 1.0],
          [4, 1.0],
          [9, 0.7777777777777778],
          [2, 1.0],
          [2, 1.0],
          [2, 1.0],
          [1, 0],
          [1, 0],
        ],
      },
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    xAxis: {
      name: 'k',
      type: 'log',
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    yAxis: {
      name: 'C(k)',
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    series: [
      {
        name: 'scatter',
        type: 'scatter',
        datasetIndex: 0,
      },
    ],
  };
  return (
    <ReactECharts option={option} style={{ height: '350px', width: '100%' }} />
  );
};

const Neighbor = () => {
  const option = {
    dataset: [
      {
        source: [
          [95, 50.34736842105263],
          [12, 108.08333333333333],
          [71, 56.647887323943664],
          [92, 50.95652173913044],
          [96, 48.8125],
          [145, 37.648275862068964],
          [90, 48.03333333333333],
          [138, 39.18115942028985],
          [46, 70.04347826086956],
          [123, 39.94308943089431],
          [143, 36.18881118881119],
          [141, 38.290780141843975],
          [117, 45.52991452991453],
          [73, 57.42465753424658],
          [2, 72.0],
          [129, 37.565891472868216],
          [4, 129.25],
          [107, 42.85981308411215],
          [106, 45.443396226415096],
          [24, 64.41666666666667],
          [4, 30.25],
          [22, 61.54545454545455],
          [86, 54.95348837209303],
          [52, 58.71153846153846],
          [86, 47.98837209302326],
          [9, 68.0],
          [9, 68.11111111111111],
          [86, 46.19767441860465],
          [80, 55.15],
          [15, 63.2],
          [99, 47.35353535353536],
          [126, 40.714285714285715],
          [17, 85.58823529411765],
          [14, 61.857142857142854],
          [41, 68.41463414634147],
          [8, 73.375],
          [60, 61.8],
          [3, 6.666666666666667],
          [4, 76.0],
          [86, 54.66279069767442],
          [69, 60.6231884057971],
          [20, 91.9],
          [3, 72.0],
          [2, 74.0],
          [1, 52.0],
          [6, 122.66666666666667],
          [25, 88.52],
          [5, 105.6],
          [6, 109.83333333333333],
          [5, 119.2],
          [35, 74.34285714285714],
          [7, 121.0],
          [13, 56.38461538461539],
          [59, 61.69491525423729],
          [32, 76.34375],
          [3, 119.33333333333333],
          [17, 97.17647058823529],
          [7, 92.85714285714286],
          [7, 113.42857142857143],
          [23, 88.08695652173913],
          [35, 80.05714285714286],
          [4, 118.75],
          [17, 97.41176470588235],
          [23, 94.17391304347827],
          [34, 89.32352941176471],
          [31, 82.38709677419355],
          [57, 68.6140350877193],
          [7, 113.28571428571429],
          [16, 71.5],
          [73, 60.76712328767123],
          [19, 95.6842105263158],
          [41, 76.97560975609755],
          [67, 61.701492537313435],
          [10, 104.2],
          [61, 65.77049180327869],
          [33, 91.87878787878788],
          [13, 90.92307692307692],
          [6, 123.0],
          [30, 90.9],
          [8, 105.5],
          [42, 74.28571428571429],
          [54, 67.94444444444444],
          [27, 85.74074074074075],
          [9, 111.44444444444444],
          [16, 99.5625],
          [8, 101.625],
          [13, 110.0],
          [54, 66.66666666666667],
          [6, 112.5],
          [6, 125.0],
          [17, 104.76470588235294],
          [7, 85.42857142857143],
          [6, 98.16666666666667],
          [16, 84.0625],
          [66, 62.43939393939394],
          [23, 89.04347826086956],
          [8, 101.75],
          [91, 52.61538461538461],
          [24, 99.04166666666667],
          [10, 97.6],
          [20, 96.65],
          [11, 93.72727272727273],
          [31, 81.7741935483871],
          [7, 107.71428571428571],
          [62, 66.66129032258064],
          [80, 55.7125],
          [87, 49.701149425287355],
          [32, 92.0],
          [7, 92.0],
          [1, 129.0],
          [37, 82.97297297297297],
          [62, 63.854838709677416],
          [23, 81.26086956521739],
          [26, 80.5],
          [9, 97.44444444444444],
          [20, 81.85],
          [8, 112.75],
          [5, 127.8],
          [14, 88.5],
          [8, 104.375],
          [87, 51.747126436781606],
          [38, 71.07894736842105],
          [11, 102.0909090909091],
          [31, 79.19354838709677],
          [69, 59.11594202898551],
          [10, 116.3],
          [24, 89.75],
          [21, 89.19047619047619],
          [12, 94.16666666666667],
          [82, 56.24390243902439],
          [16, 99.5],
          [22, 93.13636363636364],
          [11, 104.63636363636364],
          [5, 114.4],
          [25, 81.32],
          [5, 122.0],
          [28, 87.10714285714286],
          [74, 62.13513513513514],
          [59, 67.13559322033899],
          [15, 86.13333333333334],
          [24, 95.0],
          [24, 88.75],
          [36, 76.38888888888889],
          [23, 86.6086956521739],
          [18, 99.44444444444444],
          [8, 120.25],
          [34, 86.41176470588235],
          [59, 67.49152542372882],
          [29, 83.03448275862068],
          [2, 124.5],
          [22, 91.63636363636364],
          [5, 106.6],
          [5, 108.2],
          [6, 106.66666666666667],
          [9, 94.44444444444444],
          [77, 51.493506493506494],
          [59, 61.83050847457627],
          [39, 80.61538461538461],
          [7, 80.42857142857143],
          [11, 101.36363636363636],
          [8, 51.125],
          [13, 97.6923076923077],
          [30, 77.9],
          [16, 104.9375],
          [25, 95.32],
          [16, 96.125],
          [25, 91.6],
          [11, 98.0909090909091],
          [23, 93.73913043478261],
          [34, 86.82352941176471],
          [16, 97.75],
          [2, 114.5],
          [15, 88.46666666666667],
          [11, 87.18181818181819],
          [15, 101.06666666666666],
          [11, 103.45454545454545],
          [19, 99.52631578947368],
          [12, 92.83333333333333],
          [7, 104.42857142857143],
          [7, 94.0],
          [14, 99.28571428571429],
          [10, 93.0],
          [18, 95.83333333333333],
          [6, 105.5],
          [5, 111.2],
          [1, 86.0],
          [14, 103.21428571428571],
          [11, 86.0909090909091],
          [4, 49.25],
          [11, 73.45454545454545],
          [9, 57.888888888888886],
          [4, 85.5],
          [5, 85.6],
          [11, 89.9090909090909],
          [10, 88.6],
          [4, 128.0],
          [15, 93.86666666666666],
          [14, 97.85714285714286],
          [9, 95.44444444444444],
          [3, 101.66666666666667],
          [2, 98.5],
          [2, 96.5],
          [7, 97.28571428571429],
          [5, 118.2],
          [4, 99.5],
          [6, 114.33333333333333],
          [4, 107.75],
          [6, 66.0],
          [6, 93.83333333333333],
          [8, 90.375],
          [2, 12.0],
          [20, 98.45],
          [3, 127.0],
          [6, 84.0],
          [1, 60.0],
          [7, 106.28571428571429],
          [2, 102.5],
          [1, 60.0],
          [7, 97.0],
          [3, 119.33333333333333],
          [4, 122.25],
          [1, 80.0],
          [4, 38.5],
          [2, 104.5],
          [4, 106.25],
          [9, 91.77777777777777],
          [2, 101.5],
          [2, 115.0],
          [2, 102.0],
          [1, 34.0],
          [1, 141.0],
        ],
      },
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    xAxis: {
      name: 'k',
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    yAxis: {
      name: 'k_nn',
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    series: [
      {
        name: 'scatter',
        type: 'scatter',
        datasetIndex: 0,
      },
    ],
  };
  return (
    <ReactECharts option={option} style={{ height: '350px', width: '100%' }} />
  );
};

export { Degree, Cluster, Neighbor };
