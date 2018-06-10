import {
  SET_STATE_CHART_OPTIONS_CLUSTERS_ERLANG,
  SET_STATE_CHART_OPTIONS_CLUSTERS_PAYLOAD,
  SET_STATE_CHART_OPTIONS_CLUSTERS_CCR,
  SET_STATE_CHART_OPTIONS_CLUSTERS_PCR,
  SET_STATE_CHART_OPTIONS_CLUSTERS_USERS,
  SET_PRELOADER_STATE_CLUSTERS_ERLANG,
  SET_PRELOADER_STATE_CLUSTERS_PAYLOAD,
  SET_PRELOADER_STATE_CLUSTERS_CCR,
  SET_PRELOADER_STATE_CLUSTERS_PCR,
  SET_PRELOADER_STATE_CLUSTERS_USERS,
  //Breadcrumb constants
  MENU_SELECTOR_LAPSE_CLUSTERS,
  MODAL_CALENDAR_CLUSTERS,
  SET_CALENDAR_DATE_START_CLUSTERS,
  SET_CALENDAR_DATE_END_CLUSTERS,
  SET_SELECTED_TIME_LAPSE_CLUSTERS,
  SHOW_CLUSTER,
  SEARCH_CLUSTERS,
  CLUSTERS_SUGGESTIONS,
  SELECTED_CLUSTER,
  SHOW_REGION_CLUSTERS,
  SEARCH_REGION_CLUSTERS,
  REGION_SUGGESTIONS_CLUSTERS,
  SELECTED_REGION_CLUSTERS,
  REGION_INPUT_CHANGE_CLUSTERS,
  CLUSTERS_INPUT_CHANGE,
  REGION_SUCCESS_CLUSTERS,
  CLUSTERS_SUCCESS,
  STATISTICS_SUCCESS_CLUSTERS_ERLANG,
  STATISTICS_SUCCESS_CLUSTERS_PAYLOAD,
  STATISTICS_SUCCESS_CLUSTERS_CCR,
  STATISTICS_SUCCESS_CLUSTERS_PCR,
  STATISTICS_SUCCESS_CLUSTERS_USERS,
  SET_CHART_OPTIONS_CLUSTERS_ERLANG,
  SET_CHART_OPTIONS_CLUSTERS_PAYLOAD,
  SET_CHART_OPTIONS_CLUSTERS_CCR,
  SET_CHART_OPTIONS_CLUSTERS_PCR,
  SET_CHART_OPTIONS_CLUSTERS_USERS,
  SET_CONFIG_CLEAN_SERIES_CLUSTERS_ERLANG,
  SET_CONFIG_CLEAN_SERIES_CLUSTERS_PAYLOAD,
  SET_CONFIG_CLEAN_SERIES_CLUSTERS_CCR,
  SET_CONFIG_CLEAN_SERIES_CLUSTERS_PCR,
  SET_CONFIG_CLEAN_SERIES_CLUSTERS_USERS,
  SELECTED_GROUP_CLUSTERS,
  SET_STATE_GROUP_MENU_CLUSTERS,
  CHANGE_CONSULT_STATE_CLUSTERS,
  SET_CHART_OPTIONS_CLUSTERS_CONSULT,
  SET_STATE_CHART_OPTIONS_CLUSTERS_CONSULT,
  STATISTICS_SUCCESS_CLUSTERS_CONSULT,
  SET_PRELOADER_STATE_CLUSTERS_CONSULT,
  SET_CONFIG_CLEAN_SERIES_CLUSTERS_CONSULT,
} from './constants'
import moment from 'moment'

const initialState = {
  //Chart for Erlang
  completeFetchDataErlang: true,
  stateChartOptionsErlang: false,
  themeErlang: 'default',
  configErlang: {
    chart: {
      type: 'line',
      zoomType: 'xy',
      height: '35%',
      margin: [30, 0, 30, 0],
      alignTicks: false,
      events: {
        load: function() {
          //  var
          if (this.series.length > 0) {
            var series = this.series,
              max = series[0].dataMax,
              min = series[0].dataMin

            series.forEach(function(serie) {
              if (serie.dataMax > max) {
                max = serie.dataMax
              }

              if (serie.dataMin < min) {
                min = serie.dataMin
              }
            })

            this.yAxis[0].update({
              min: min,
              max: max,
            })
          }
        },
      },
    },
    rangeSelector: {
      enabled: false,
      buttonTheme: {
        width: 63,
      },
      buttons: [
        {
          type: 'day',
          count: 1,
          text: 'Día',
        },
        {
          type: 'week',
          count: 1,
          text: 'Semana',
        },
        {
          type: 'month',
          count: 1,
          text: 'Mes',
        },
        {
          type: 'all',
          text: 'Todo',
        },
      ],
      selected: 1, // all
    },
    scrollbar: {
      enabled: false,
    },
    legend: {
      enabled: true,
    } /*
    legend: {
      enabled: true,
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: -10,
      y: 10,
      floating: true,
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
      shadow: true
    },*/,
    exporting: {
      enabled: false,
      sourceWidth: 1200,
      sourceHeight: 400,
      scale: 4,
      chartOptions: {
        //subtitle: null
      },
      csv: {
        dateFormat: '%d/%m/%Y %H:%M',
      },
      xls: {
        dateFormat: '%d/%m/%Y %H:%M',
      },
      //Quita el boton de exportación
      /* buttons: {
             contextButton: {
               enabled: false
             }
           }*/
    },
    noData: {
      style: {
        fontSize: '1.5em',
      },
    },
    navigator: {
      enabled: true,
      series: {
        includeInCSVExport: false,
      },
    },
    credits: {
      enabled: false,
      text: 'Corporación Digitel, C.A.',
      /* eslint-disable */
      href: 'javascript:window.open("http://www.digitel.com.ve/", "_blank")',
      /* eslint-enable */
    },
    title: {
      text: 'ERLANG',
    },
    yAxis: [
      {
        // Primary yAxis
        gridLineWidth: 1,
        labels: {
          format: '{value}',
        },
        title: {
          text: '',
          fontWeight: 'bold',
        },
        opposite: true,
      },
    ],
    series: [
      {
        name: 'ERLANG',
        data: [],
        yAxis: 0,
        type: 'line',
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  },
  servicesErlang: {
    service2gDatos: { ID: 1, SERVICE: '2G', IDTECHNOLOGY: 1 },
    service3gDatos: { ID: 3, SERVICE: '3G', IDTECHNOLOGY: 2 },
  },
  selectorChartOptionsErlang: {
    kpisForThisChart: ['ERLANG', 'CCR'],
    optionsTypeChart: ['line', 'column', 'area', 'spline', 'areaspline'],

    column1: {
      service: { ID: 1, SERVICE: '2G', IDTECHNOLOGY: 1 },
      kpiSelected: ['ERLANG'],
      typeChartSelected: ['line', 'line'],
    },

    column2: {
      service: { ID: 3, SERVICE: '3G', IDTECHNOLOGY: 2 },
      kpiSelected: ['ERLANG'],
      typeChartSelected: ['line', 'line'],
    },

    column3: {
      service: {},
      kpiSelected: [],
      typeChartSelected: ['line', 'line'],
    },
  },

  //Chart for Payload
  completeFetchDataPayload: true,
  stateChartOptionsPayload: false,
  themePayload: 'default',
  configPayload: {
    chart: {
      type: 'line',
      zoomType: 'xy',
      height: '35%',
      margin: [30, 0, 30, 0],
      alignTicks: false,
      events: {
        load: function() {
          //  var
          var series = this.series,
            max = series[0].dataMax,
            min = series[0].dataMin

          series.forEach(function(serie) {
            if (serie.dataMax > max) {
              max = serie.dataMax
            }

            if (serie.dataMin < min) {
              min = serie.dataMin
            }
          })

          this.yAxis[0].update({
            min: min,
            max: max,
          })
        },
      },
    },
    rangeSelector: {
      enabled: false,
      buttonTheme: {
        width: 63,
      },
      buttons: [
        {
          type: 'day',
          count: 1,
          text: 'Día',
        },
        {
          type: 'week',
          count: 1,
          text: 'Semana',
        },
        {
          type: 'month',
          count: 1,
          text: 'Mes',
        },
        {
          type: 'all',
          text: 'Todo',
        },
      ],
      selected: 1, // all
    },
    scrollbar: {
      enabled: false,
    },
    legend: {
      enabled: true,
    } /*
    legend: {
      enabled: true,
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: -10,
      y: 10,
      floating: true,
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
      shadow: true
    },*/,
    exporting: {
      enabled: false,
      sourceWidth: 1200,
      sourceHeight: 400,
      scale: 4,
      chartOptions: {
        //subtitle: null
      },
      csv: {
        dateFormat: '%d/%m/%Y %H:%M',
      },
      xls: {
        dateFormat: '%d/%m/%Y %H:%M',
      },
      //Quita el boton de exportación
      /* buttons: {
             contextButton: {
               enabled: false
             }
           }*/
    },
    noData: {
      style: {
        fontSize: '1.5em',
      },
    },
    navigator: {
      enabled: true,
      series: {
        includeInCSVExport: false,
      },
    },
    credits: {
      enabled: false,
      text: 'Corporación Digitel, C.A.',
      /* eslint-disable */
      href: 'javascript:window.open("http://www.digitel.com.ve/", "_blank")',
      /* eslint-enable */
    },
    title: {
      text: 'PAYLOAD',
    },
    yAxis: [
      {
        // Primary yAxis
        gridLineWidth: 1,
        labels: {
          format: '{value}',
        },
        title: {
          text: '',
          fontWeight: 'bold',
        },
        opposite: true,
      },
    ],
    series: [
      {
        name: 'PAYLOAD',
        data: [],
        yAxis: 0,
        type: 'line',
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  },
  servicesPayload: {
    service2gDatos: { ID: 2, SERVICE: '2G', IDTECHNOLOGY: 1 },
    service3gDatos: { ID: 4, SERVICE: '3G', IDTECHNOLOGY: 2 },
    service4gDatps: { ID: 5, SERVICE: '4G', IDTECHNOLOGY: 3 },
  },
  selectorChartOptionsPayload: {
    kpisForThisChart: ['PAYLOAD_TOT', 'PCR'],
    optionsTypeChart: ['line', 'column', 'area', 'spline', 'areaspline'],

    column1: {
      service: { ID: 2, SERVICE: '2G', IDTECHNOLOGY: 1 },
      kpiSelected: ['PAYLOAD_TOT'],
      typeChartSelected: ['line', 'line'],
    },

    column2: {
      service: { ID: 4, SERVICE: '3G', IDTECHNOLOGY: 2 },
      kpiSelected: ['PAYLOAD_TOT'],
      typeChartSelected: ['line', 'line'],
    },

    column3: {
      service: { ID: 5, SERVICE: '4G', IDTECHNOLOGY: 3 },
      kpiSelected: ['PAYLOAD_TOT'],
      typeChartSelected: ['line', 'line'],
    },
  },

  //Chart for CCR
  completeFetchDataCcr: true,
  stateChartOptionsCcr: false,
  themeCcr: 'default',
  configCcr: {
    chart: {
      type: 'line',
      zoomType: 'xy',
      height: '35%',
      margin: [30, 0, 30, 0],
      alignTicks: false,
      events: {
        load: function() {
          //  var
          var series = this.series,
            max = series[0].dataMax,
            min = series[0].dataMin

          series.forEach(function(serie) {
            if (serie.dataMax > max) {
              max = serie.dataMax
            }

            if (serie.dataMin < min) {
              min = serie.dataMin
            }
          })

          this.yAxis[0].update({
            min: min,
            max: max,
          })
        },
      },
    },
    rangeSelector: {
      enabled: false,
      buttonTheme: {
        width: 63,
      },
      buttons: [
        {
          type: 'day',
          count: 1,
          text: 'Día',
        },
        {
          type: 'week',
          count: 1,
          text: 'Semana',
        },
        {
          type: 'month',
          count: 1,
          text: 'Mes',
        },
        {
          type: 'all',
          text: 'Todo',
        },
      ],
      selected: 1, // all
    },
    scrollbar: {
      enabled: false,
    },
    legend: {
      enabled: true,
    } /*
    legend: {
      enabled: true,
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: -10,
      y: 10,
      floating: true,
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
      shadow: true
    },*/,
    exporting: {
      enabled: false,
      sourceWidth: 1200,
      sourceHeight: 400,
      scale: 4,
      chartOptions: {
        //subtitle: null
      },
      csv: {
        dateFormat: '%d/%m/%Y %H:%M',
      },
      xls: {
        dateFormat: '%d/%m/%Y %H:%M',
      },
      //Quita el boton de exportación
      /* buttons: {
             contextButton: {
               enabled: false
             }
           }*/
    },
    noData: {
      style: {
        fontSize: '1.5em',
      },
    },
    navigator: {
      enabled: true,
      series: {
        includeInCSVExport: false,
      },
    },
    credits: {
      enabled: false,
      text: 'Corporación Digitel, C.A.',
      /* eslint-disable */
      href: 'javascript:window.open("http://www.digitel.com.ve/", "_blank")',
      /* eslint-enable */
    },
    title: {
      text: 'CCR',
    },
    yAxis: [
      {
        // Primary yAxis
        gridLineWidth: 1,
        labels: {
          format: '{value}',
        },
        title: {
          text: '',
          fontWeight: 'bold',
        },
        opposite: true,
      },
    ],
    series: [
      {
        name: 'CCR',
        data: [],
        yAxis: 0,
        type: 'line',
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  },
  servicesCcr: {
    service2gDatos: { ID: 1, SERVICE: '2G', IDTECHNOLOGY: 1 },
    service3gDatos: { ID: 3, SERVICE: '3G', IDTECHNOLOGY: 2 },
  },
  selectorChartOptionsCcr: {
    kpisForThisChart: ['CCR', 'ERLANG'],
    optionsTypeChart: ['line', 'column', 'area', 'spline', 'areaspline'],

    column1: {
      service: { ID: 1, SERVICE: '2G', IDTECHNOLOGY: 1 },
      kpiSelected: ['CCR'],
      typeChartSelected: ['line', 'line'],
    },

    column2: {
      service: { ID: 3, SERVICE: '3G', IDTECHNOLOGY: 2 },
      kpiSelected: ['CCR'],
      typeChartSelected: ['line', 'line'],
    },

    column3: {
      service: {},
      kpiSelected: [],
      typeChartSelected: ['line', 'line'],
    },
  },
  //Chart for PCR
  completeFetchDataPcr: true,
  stateChartOptionsPcr: false,
  themePcr: 'default',
  configPcr: {
    chart: {
      type: 'line',
      zoomType: 'xy',
      height: '35%',
      margin: [30, 0, 30, 0],
      alignTicks: false,
      events: {
        load: function() {
          //  var
          var series = this.series,
            max = series[0].dataMax,
            min = series[0].dataMin

          series.forEach(function(serie) {
            if (serie.dataMax > max) {
              max = serie.dataMax
            }

            if (serie.dataMin < min) {
              min = serie.dataMin
            }
          })

          this.yAxis[0].update({
            min: min,
            max: max,
          })
        },
      },
    },
    rangeSelector: {
      enabled: false,
      buttonTheme: {
        width: 63,
      },
      buttons: [
        {
          type: 'day',
          count: 1,
          text: 'Día',
        },
        {
          type: 'week',
          count: 1,
          text: 'Semana',
        },
        {
          type: 'month',
          count: 1,
          text: 'Mes',
        },
        {
          type: 'all',
          text: 'Todo',
        },
      ],
      selected: 1, // all
    },
    scrollbar: {
      enabled: false,
    },
    legend: {
      enabled: true,
    } /*
    legend: {
      enabled: true,
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: -10,
      y: 10,
      floating: true,
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
      shadow: true
    },*/,
    exporting: {
      enabled: false,
      sourceWidth: 1200,
      sourceHeight: 400,
      scale: 4,
      chartOptions: {
        //subtitle: null
      },
      csv: {
        dateFormat: '%d/%m/%Y %H:%M',
      },
      xls: {
        dateFormat: '%d/%m/%Y %H:%M',
      },
      //Quita el boton de exportación
      /* buttons: {
             contextButton: {
               enabled: false
             }
           }*/
    },
    noData: {
      style: {
        fontSize: '1.5em',
      },
    },
    navigator: {
      enabled: true,
      series: {
        includeInCSVExport: false,
      },
    },
    credits: {
      enabled: false,
      text: 'Corporación Digitel, C.A.',
      /* eslint-disable */
      href: 'javascript:window.open("http://www.digitel.com.ve/", "_blank")',
      /* eslint-enable */
    },
    title: {
      text: 'PCR',
    },
    yAxis: [
      {
        // Primary yAxis
        gridLineWidth: 1,
        labels: {
          format: '{value}',
        },
        title: {
          text: '',
          fontWeight: 'bold',
        },
        opposite: true,
      },
    ],
    series: [
      {
        name: 'PCR',
        data: [],
        yAxis: 0,
        type: 'line',
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  },
  servicesPcr: {
    service2gDatos: { ID: 2, SERVICE: '2G', IDTECHNOLOGY: 1 },
    service3gDatos: { ID: 4, SERVICE: '3G', IDTECHNOLOGY: 2 },
    service4gDatos: { ID: 5, SERVICE: '4G', IDTECHNOLOGY: 3 },
  },
  selectorChartOptionsPcr: {
    kpisForThisChart: ['PCR', 'PAYLOAD_TOT'],
    optionsTypeChart: ['line', 'column', 'area', 'spline', 'areaspline'],

    column1: {
      service: { ID: 2, SERVICE: '2G', IDTECHNOLOGY: 1 },
      kpiSelected: ['PCR'],
      typeChartSelected: ['line', 'line'],
    },

    column2: {
      service: { ID: 4, SERVICE: '3G', IDTECHNOLOGY: 2 },
      kpiSelected: ['PCR'],
      typeChartSelected: ['line', 'line'],
    },

    column3: {
      service: { ID: 5, SERVICE: '4G', IDTECHNOLOGY: 3 },
      kpiSelected: ['PCR'],
      typeChartSelected: ['line', 'line'],
    },
  },

  //Chart for Users
  completeFetchDataUsers: true,
  stateChartOptionsUsers: false,
  themeUsers: 'default',
  configUsers: {
    chart: {
      type: 'line',
      zoomType: 'xy',
      height: '35%',
      margin: [30, 0, 30, 0],
      alignTicks: false,
      events: {
        load: function() {
          //  var
          var series = this.series,
            max = series[0].dataMax,
            min = series[0].dataMin

          series.forEach(function(serie) {
            if (serie.dataMax > max) {
              max = serie.dataMax
            }

            if (serie.dataMin < min) {
              min = serie.dataMin
            }
          })

          this.yAxis[0].update({
            min: min,
            max: max,
          })
        },
      },
    },
    rangeSelector: {
      enabled: false,
      buttonTheme: {
        width: 63,
      },
      buttons: [
        {
          type: 'day',
          count: 1,
          text: 'Día',
        },
        {
          type: 'week',
          count: 1,
          text: 'Semana',
        },
        {
          type: 'month',
          count: 1,
          text: 'Mes',
        },
        {
          type: 'all',
          text: 'Todo',
        },
      ],
      selected: 1, // all
    },
    scrollbar: {
      enabled: false,
    },
    legend: {
      enabled: true,
    } /*
    legend: {
      enabled: true,
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: -10,
      y: 10,
      floating: true,
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
      shadow: true
    },*/,
    exporting: {
      enabled: false,
      sourceWidth: 1200,
      sourceHeight: 400,
      scale: 4,
      chartOptions: {
        //subtitle: null
      },
      csv: {
        dateFormat: '%d/%m/%Y %H:%M',
      },
      xls: {
        dateFormat: '%d/%m/%Y %H:%M',
      },
      //Quita el boton de exportación
      /* buttons: {
             contextButton: {
               enabled: false
             }
           }*/
    },
    noData: {
      style: {
        fontSize: '1.5em',
      },
    },
    navigator: {
      enabled: true,
      series: {
        includeInCSVExport: false,
      },
    },
    credits: {
      enabled: false,
      text: 'Corporación Digitel, C.A.',
      /* eslint-disable */
      href: 'javascript:window.open("http://www.digitel.com.ve/", "_blank")',
      /* eslint-enable */
    },
    title: {
      text: 'USUARIOS',
    },
    yAxis: [
      {
        // Primary yAxis
        gridLineWidth: 1,
        labels: {
          format: '{value}',
        },
        title: {
          text: '',
          fontWeight: 'bold',
        },
        opposite: true,
      },
    ],
    series: [
      {
        name: 'USUARIOS',
        data: [],
        yAxis: 0,
        type: 'line',
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  },
  servicesUsers: {
    service3gDatos: { ID: 4, SERVICE: '3G', IDTECHNOLOGY: 2 },
    service4gDatps: { ID: 5, SERVICE: '4G', IDTECHNOLOGY: 3 },
  },

  selectorChartOptionsUsers: {
    kpisForThisChart: ['USERS_HSDPA', 'USERS_HSUPA'],
    optionsTypeChart: ['line', 'column', 'area', 'spline', 'areaspline'],

    column1: {
      service: { ID: 4, SERVICE: '3G', IDTECHNOLOGY: 2 },
      kpiSelected: ['USERS_HSDPA', 'USERS_HSUPA'],
      typeChartSelected: ['line', 'line'],
    },

    column2: {
      service: { ID: 5, SERVICE: '4G', IDTECHNOLOGY: 3 },
      kpiSelected: ['USERS_HSDPA', 'USERS_HSUPA'],
      typeChartSelected: ['line', 'line'],
    },

    column3: {
      services: {},
      kpiSelected: [],
      typeChartSelected: ['line', 'line'],
    },
  },

  //Breadcrumb state
  timeLapses: {
    day: {
      label: 'HOY',
      since: moment().format('YYYYMMDD'),
      until: moment().format('YYYYMMDD'),
    },
    week: {
      label: 'ULTIMA SEMANA',
      since: moment()
        .subtract(6, 'd')
        .format('YYYYMMDD'),
      until: moment().format('YYYYMMDD'),
    },
    month: {
      label: 'ULTIMO MES',
      since: moment()
        .subtract(1, 'months')
        .format('YYYYMMDD'),
      until: moment().format('YYYYMMDD'),
    },
    quarterly: {
      label: 'UlTIMO TRIMESTRE',
      since: moment()
        .subtract(3, 'months')
        .format('YYYYMMDD'),
      until: moment().format('YYYYMMDD'),
    },
    custom: {
      label: 'PERSONALIZADO',
      since: moment().format('YYYYMMDD'),
      until: moment().format('YYYYMMDD'),
    },
  },

  regions: { sinconexion: { ID: null, REGION: 'CARGANDO...' } },
  clusters: { sinconexion: { ID: null, CLUSTERS: 'CARGANDO...' } },

  selectedTimeLapse: {
    label:
      moment()
        .subtract(6, 'd')
        .format('DD/MM/YY') +
      ' - ' +
      moment().format('DD/MM/YY'),
    since: moment()
      .subtract(6, 'd')
      .format('YYYYMMDD'),
    until: moment().format('YYYYMMDD'),
  },

  openModalCalendar: false,

  dropMenuShowSelectorLapse: false,

  showRegion: true,
  showCluster: true,

  selectedRegion: { ID: null, REGION: 'REGIONES...' },
  regionSuggestions: true,
  showSearchRegion: false,

  selectedCluster: '',
  clustersSuggestions: true,
  showSearchCluster: false,

  regionInput: '',
  clusterInput: '',

  stateGroupOption: false,
  stateGroupOptionHover: false,
  groupOptions: {
    groupRegion: { ID: 0, GROUP: 'región' },
    groupSubRegion: { ID: 1, GROUP: 'subregión' },
  },
  selectedGroup: { ID: 0, GROUP: 'región' },
  consult: false,

  completeFetchData: true,
  stateChartOptions: true,
  theme: 'default',
  config: {
    chart: {
      type: 'line',
      zoomType: 'xy',
      alignTicks: false,
      events: {
        load: function() {
          //  var
          var series = this.series,
            max = series[0].dataMax,
            min = series[0].dataMin

          series.forEach(function(serie) {
            if (serie.dataMax > max) {
              max = serie.dataMax
            }

            if (serie.dataMin < min) {
              min = serie.dataMin
            }
          })

          this.yAxis[0].update({
            min: min,
            max: max,
          })
        },
      },
    },
    rangeSelector: {
      buttonTheme: {
        width: 63,
      },
      buttons: [
        {
          type: 'day',
          count: 1,
          text: 'Día',
        },
        {
          type: 'week',
          count: 1,
          text: 'Semana',
        },
        {
          type: 'month',
          count: 1,
          text: 'Mes',
        },
        {
          type: 'all',
          text: 'Todo',
        },
      ],
      selected: 1, // all
    },
    legend: {
      enabled: true,
    },
    scrollbar: {
      enabled: false,
    },
    /*legend: {
          enabled:true,
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 100,
          floating: true,
          borderWidth: 1,
          backgroundColor: ('#FFFFFF'),
          shadow: true
        },*/
    exporting: {
      sourceWidth: 1200,
      sourceHeight: 400,
      scale: 4,
      chartOptions: {
        //subtitle: null
      },
      csv: {
        dateFormat: '%d/%m/%Y %H:%M',
      },
      xls: {
        dateFormat: '%d/%m/%Y %H:%M',
      },
      //Quita el boton de exportación
      /* buttons: {
             contextButton: {
               enabled: false
             }
           }*/
    },
    noData: {
      style: {
        fontSize: '1.5em',
      },
    },
    navigator: {
      enabled: true,
      series: {
        includeInCSVExport: false,
      },
    },
    credits: {
      enabled: false,
      text: 'Corporación Digitel, C.A.',
      /* eslint-disable */
      href: 'javascript:window.open("http://www.digitel.com.ve/", "_blank")',
      /* eslint-enable */
    },
    title: {
      text: 'GRAFICA',
    },
    yAxis: [
      {
        // Primary yAxis
        gridLineWidth: 1,
        labels: {
          format: '{value}',
        },
        title: {
          text: '',
          fontWeight: 'bold',
        },
        opposite: true,
      },
    ],
    series: [
      {
        name: 'KPI',
        data: [],
        yAxis: 0,
        type: 'line',
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  },
  services: {
    service2gDatos: { ID: 2, SERVICE: '2G', IDTECHNOLOGY: 1 },
    service3gDatos: { ID: 4, SERVICE: '3G', IDTECHNOLOGY: 2 },
    service4gDatps: { ID: 5, SERVICE: '4G', IDTECHNOLOGY: 3 },
  },
  selectedService: { ID: 1, SERVICE: '2G', IDTECHNOLOGY: 1 },
  selectorChartOptions: {
    kpisForThisChart: [
      'ERLANG',
      'PAYLOAD_TOT',
      'CCR',
      'PCR',
      'USERS_HSDPA',
      'USERS_HSUPA',
    ],
    optionsTypeChart: ['line', 'column', 'area', 'spline', 'areaspline'],

    column1: {
      service: { ID: 1, SERVICE: '2G', IDTECHNOLOGY: 1 },
      kpiSelected: ['ERLANG', 'PAYLOAD_TOT'],
      typeChartSelected: ['line', 'line'],
    },

    column2: {
      service: { ID: 3, SERVICE: '3G', IDTECHNOLOGY: 2 },
      kpiSelected: ['ERLANG', 'PAYLOAD_TOT'],
      typeChartSelected: ['line', 'line'],
    },

    column3: {
      service: { ID: 5, SERVICE: '4G', IDTECHNOLOGY: 3 },
      kpiSelected: ['PAYLOAD_TOT'],
      typeChartSelected: ['line', 'line'],
    },
  },
}

const reducer = function setStateSidebar(state = initialState, action) {
  switch (action.type) {
    case SET_STATE_CHART_OPTIONS_CLUSTERS_ERLANG:
      return {
        ...state,
        stateChartOptionsErlang: action.value,
      }
    case SET_STATE_CHART_OPTIONS_CLUSTERS_PAYLOAD:
      return {
        ...state,
        stateChartOptionsPayload: action.value,
      }
    case SET_STATE_CHART_OPTIONS_CLUSTERS_CCR:
      return {
        ...state,
        stateChartOptionsCcr: action.value,
      }
    case SET_STATE_CHART_OPTIONS_CLUSTERS_PCR:
      return {
        ...state,
        stateChartOptionsPcr: action.value,
      }
    case SET_STATE_CHART_OPTIONS_CLUSTERS_USERS:
      return {
        ...state,
        stateChartOptionsUsers: action.value,
      }
    case SET_STATE_CHART_OPTIONS_CLUSTERS_CONSULT:
      return {
        ...state,
        stateChartOptions: action.value,
      }
    case STATISTICS_SUCCESS_CLUSTERS_ERLANG:
      return {
        ...state,
        configErlang: action.config,
      }
    case STATISTICS_SUCCESS_CLUSTERS_PAYLOAD:
      return {
        ...state,
        configPayload: action.config,
      }
    case STATISTICS_SUCCESS_CLUSTERS_CCR:
      return {
        ...state,
        configCcr: action.config,
      }
    case STATISTICS_SUCCESS_CLUSTERS_PCR:
      return {
        ...state,
        configPcr: action.config,
      }
    case STATISTICS_SUCCESS_CLUSTERS_USERS:
      return {
        ...state,
        configUsers: action.config,
      }
    case STATISTICS_SUCCESS_CLUSTERS_CONSULT:
      return {
        ...state,
        config: action.config,
      }
    case SET_PRELOADER_STATE_CLUSTERS_ERLANG:
      return {
        ...state,
        completeFetchDataErlang: action.stateFetch,
      }
    case SET_PRELOADER_STATE_CLUSTERS_PAYLOAD:
      return {
        ...state,
        completeFetchDataPayload: action.stateFetch,
      }
    case SET_PRELOADER_STATE_CLUSTERS_CCR:
      return {
        ...state,
        completeFetchDataCcr: action.stateFetch,
      }
    case SET_PRELOADER_STATE_CLUSTERS_PCR:
      return {
        ...state,
        completeFetchDataPcr: action.stateFetch,
      }
    case SET_PRELOADER_STATE_CLUSTERS_USERS:
      return {
        ...state,
        completeFetchDataUsers: action.stateFetch,
      }
    case SET_PRELOADER_STATE_CLUSTERS_CONSULT:
      return {
        ...state,
        completeFetchData: action.stateFetch,
      }
    //Breadcrumb reducer
    case MENU_SELECTOR_LAPSE_CLUSTERS:
      return {
        ...state,
        dropMenuShowSelectorLapse: action.value,
      }
    case SHOW_REGION_CLUSTERS:
      return {
        ...state,
        showRegion: action.value,
      }
    case SEARCH_REGION_CLUSTERS:
      return {
        ...state,
        showSearchRegion: action.value,
      }
    case REGION_SUGGESTIONS_CLUSTERS:
      return {
        ...state,
        regionSuggestions: action.value,
      }
    case SELECTED_REGION_CLUSTERS:
      return {
        ...state,
        selectedRegion: action.region,
      }

    case SHOW_CLUSTER:
      return {
        ...state,
        showCluster: action.value,
      }
    case SEARCH_CLUSTERS:
      return {
        ...state,
        showSearchCluster: action.value,
      }
    case CLUSTERS_SUGGESTIONS:
      return {
        ...state,
        clustersSuggestions: action.value,
      }
    case SELECTED_CLUSTER:
      return {
        ...state,
        selectedCluster: action.cluster,
      }
    case MODAL_CALENDAR_CLUSTERS:
      return {
        ...state,
        openModalCalendar: action.value,
      }
    case SET_CALENDAR_DATE_START_CLUSTERS:
      return {
        ...state,
        calendarDateStart: action.value,
      }
    case SET_CALENDAR_DATE_END_CLUSTERS:
      return {
        ...state,
        calendarDateEnd: action.value,
      }
    case SET_SELECTED_TIME_LAPSE_CLUSTERS:
      return {
        ...state,
        selectedTimeLapse: action.value,
      }

    case REGION_INPUT_CHANGE_CLUSTERS:
      return {
        ...state,
        regionInput: action.value,
      }
    case CLUSTERS_INPUT_CHANGE:
      return {
        ...state,
        clusterInput: action.value,
      }
    case REGION_SUCCESS_CLUSTERS:
      return {
        ...state,
        regions: action.regions,
      }
    case CLUSTERS_SUCCESS:
      return {
        ...state,
        clusters: action.clusters,
      }
    case SET_CONFIG_CLEAN_SERIES_CLUSTERS_ERLANG: {
      let newConfig = state.config
      newConfig.series = []
      newConfig.yAxis = []
      return {
        ...state,
        configErlang: { ...newConfig },
      }
    }
    case SET_CONFIG_CLEAN_SERIES_CLUSTERS_PAYLOAD: {
      let newConfig = state.config
      newConfig.series = []
      newConfig.yAxis = []
      return {
        ...state,
        configPayload: { ...newConfig },
      }
    }
    case SET_CONFIG_CLEAN_SERIES_CLUSTERS_CCR: {
      let newConfig = state.config
      newConfig.series = []
      newConfig.yAxis = []
      return {
        ...state,
        configCcr: { ...newConfig },
      }
    }
    case SET_CONFIG_CLEAN_SERIES_CLUSTERS_PCR: {
      let newConfig = state.config
      newConfig.series = []
      newConfig.yAxis = []
      return {
        ...state,
        configPcr: { ...newConfig },
      }
    }
    case SET_CONFIG_CLEAN_SERIES_CLUSTERS_USERS: {
      let newConfig = state.config
      newConfig.series = []
      newConfig.yAxis = []
      return {
        ...state,
        configUsers: { ...newConfig },
      }
    }
    case SET_CONFIG_CLEAN_SERIES_CLUSTERS_CONSULT: {
      let newConfig = state.config
      newConfig.series = []
      newConfig.yAxis = []
      return {
        ...state,
        config: { ...newConfig },
      }
    }
    case SET_CHART_OPTIONS_CLUSTERS_ERLANG:
      return {
        ...state,
        selectorChartOptionsErlang: action.value,
      }
    case SET_CHART_OPTIONS_CLUSTERS_PAYLOAD:
      return {
        ...state,
        selectorChartOptionsPayload: action.value,
      }
    case SET_CHART_OPTIONS_CLUSTERS_CCR:
      return {
        ...state,
        selectorChartOptionsCcr: action.value,
      }
    case SET_CHART_OPTIONS_CLUSTERS_PCR:
      return {
        ...state,
        selectorChartOptionsPcr: action.value,
      }
    case SET_CHART_OPTIONS_CLUSTERS_USERS:
      return {
        ...state,
        selectorChartOptionsUsers: action.value,
      }
    case SET_CHART_OPTIONS_CLUSTERS_CONSULT:
      return {
        ...state,
        selectorChartOptions: action.value,
      }
    case SELECTED_GROUP_CLUSTERS:
      return {
        ...state,
        selectedGroup: action.group,
      }
    case SET_STATE_GROUP_MENU_CLUSTERS:
      return {
        ...state,
        stateGroupOption: action.value,
      }
    case CHANGE_CONSULT_STATE_CLUSTERS:
      return {
        ...state,
        consult: action.value,
      }
    default:
      return state
  }
}

export default reducer
