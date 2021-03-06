import React, { Component } from 'react'
import glamorous, { withTheme } from 'glamorous'
import { Scrollbars } from 'react-custom-scrollbars'
import Chart from './components/chart'
import ChartConsult from './components/chartConsult'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Breadcrumb from './components/breadcrumb'
import ContextualMenu from './components/contextualMenu'
import RefreshData from './components/refreshData'
import {
  setChartOptionsErlang,
  setChartOptionsPayload,
  setChartOptionsCcr,
  setChartOptionsPcr,
  setChartOptionsUser,
  setStateChartOptionsErlang,
  setStateChartOptionsPayload,
  setStateChartOptionsCcr,
  setStateChartOptionsPcr,
  setStateChartOptionsUsers,
  setStateChartOptions,
  setConfigChartConsult,
  setConfigChartErlang,
  setConfigChartPayload,
  setConfigChartCcr,
  setConfigChartPcr,
  setConfigChartUsers,
  setPreloaderStateErlang,
  setPreloaderStatePayload,
  setPreloaderStateCcr,
  setPreloaderStatePcr,
  setPreloaderStateUsers,
  menuSelectorLapse,
  statisticsErlangRequest,
  statisticsPayloadRequest,
  statisticsCcrRequest,
  statisticsPcrRequest,
  statisticsUsersRequest,
  statisticsRequest,
  showMarket,
  showSearchMarket,
  selectedMarket,
  showSearchRegion,
  setSetStateGroupMenu,
  changeConsultState,
} from './actions.js'

const { Div } = glamorous

class Markets extends Component {
  constructor(props) {
    super(props)
    this.renderThumb = this.renderThumb.bind(this)
    this.handleHideMenusOusideEvent = this.handleHideMenusOusideEvent.bind(this)

    this.handleChartOptionsErlang = this.handleChartOptionsErlang.bind(this)
    this.handleChartOptionsPayload = this.handleChartOptionsPayload.bind(this)
    this.handleChartOptionsCcr = this.handleChartOptionsCcr.bind(this)
    this.handleChartOptionsPcr = this.handleChartOptionsPcr.bind(this)
    this.handleChartOptionsUsers = this.handleChartOptionsUsers.bind(this)
    this.handleChartOptions = this.handleChartOptions.bind(this)

    this.initiateRequests = this.initiateRequests.bind(this)
    this.initiateRequestsErlang = this.initiateRequestsErlang.bind(this)
    this.initiateRequestsPayload = this.initiateRequestsPayload.bind(this)
    this.initiateRequestsCcr = this.initiateRequestsCcr.bind(this)
    this.initiateRequestsPcr = this.initiateRequestsPcr.bind(this)
    this.initiateRequestsUsers = this.initiateRequestsUsers.bind(this)
    this.initiateRequestsConsult = this.initiateRequestsConsult.bind(this)
    this.handleHideMenuMarkets = this.handleHideMenuMarkets.bind(this)
    this.initateRequestBasicLastMonth = this.initateRequestBasicLastMonth.bind(
      this
    )
    this.cleanChart = this.cleanChart.bind(this)
  }
  componentWillUnmount() {
    this.cleanChart()
    this.props.actions.showMarket(false)
    this.props.actions.showSearchMarket(false)
    this.props.actions.selectedMarket('')
    this.props.actions.changeConsultState(false)
  }

  cleanChart() {
    let config
    config = this.props.ACTUALCONFIG_ERLANG
    config.series = [
      {
        name: 'ERLANG',
        data: [],
        yAxis: 0,
        type: 'line',
        tooltip: {
          valueDecimals: 2,
        },
      },
    ]
    this.props.actions.setConfigChartErlang(config)

    config = this.props.ACTUALCONFIG_PAYLOAD
    config.series = [
      {
        name: 'PAYLOAD',
        data: [],
        yAxis: 0,
        type: 'line',
        tooltip: {
          valueDecimals: 2,
        },
      },
    ]
    this.props.actions.setConfigChartPayload(config)

    config = this.props.ACTUALCONFIG_CCR
    config.series = [
      {
        name: 'CCR',
        data: [],
        yAxis: 0,
        type: 'line',
        tooltip: {
          valueDecimals: 2,
        },
      },
    ]
    this.props.actions.setConfigChartCcr(config)

    config = this.props.ACTUALCONFIG_PCR
    config.series = [
      {
        name: 'PCR',
        data: [],
        yAxis: 0,
        type: 'line',
        tooltip: {
          valueDecimals: 2,
        },
      },
    ]
    this.props.actions.setConfigChartPcr(config)

    config = this.props.ACTUALCONFIG_USERS
    config.series = [
      {
        name: 'USUARIOS',
        data: [],
        yAxis: 0,
        type: 'line',
        tooltip: {
          valueDecimals: 2,
        },
      },
    ]
    this.props.actions.setConfigChartUsers(config)

    config = this.props.ACTUALCONFIG
    config.series = [
      {
        name: 'KPI',
        data: [],
        yAxis: 0,
        type: 'line',
        tooltip: {
          valueDecimals: 2,
        },
      },
    ]
    this.props.actions.setConfigChartConsult(config)
  }

  renderThumb() {
    return (
      <div
        style={{
          backgroundColor: '#B6B6B6',
          width: '1em',
        }}
      />
    )
  }

  handleHideMenusOusideEvent() {
    if (this.props.dropMenuShowSelectorLapse)
      this.props.actions.menuSelectorLapse(false)
    if (this.props.stateGroupOption) {
      this.props.actions.setSetStateGroupMenu(false)
    }
  }

  handleChartOptionsErlang(value) {
    this.props.actions.setStateChartOptionsErlang(value)
  }
  handleChartOptionsPayload(value) {
    this.props.actions.setStateChartOptionsPayload(value)
  }
  handleChartOptionsCcr(value) {
    this.props.actions.setStateChartOptionsCcr(value)
  }
  handleChartOptionsPcr(value) {
    this.props.actions.setStateChartOptionsPcr(value)
  }
  handleChartOptionsUsers(value) {
    this.props.actions.setStateChartOptionsUsers(value)
  }

  handleChartOptions(value) {
    this.props.actions.setStateChartOptions(value)
  }

  //Funcion que se envía como callback para obtener la nueva configuración para la grafica
  handleSetConfig(ConfigValue) {
    this.props.actions.setConfigChart(ConfigValue)
  }

  //Funcion que se envia como callback para obtener estado de carga de los datos
  handleSetPreloadState(fetchState) {
    this.props.actions.setPreloaderState(fetchState)
  }

  initiateRequests() {
    if (this.props.consult) {
      this.initiateRequestsConsult()
      if (
        Object.keys(this.props.markets).length > 0 &&
        this.props.MERCADO === undefined
      ) {
        this.props.actions.showMarket(true)
        this.props.actions.showSearchMarket(true)
      }
    } else {
      this.initateRequestBasicLastMonth()
    }
  }

  initateRequestBasicLastMonth() {
    this.initiateRequestsErlang()
    this.initiateRequestsPayload()
    this.initiateRequestsCcr()
    this.initiateRequestsPcr()
    this.initiateRequestsUsers()
  }
  handleHideMenuMarkets() {
    if (
      this.props.MERCADO === undefined ||
      this.props.MERCADO === 'SIN CONEXION'
    ) {
      this.props.actions.showMarket(false)
    }
    this.props.actions.showSearchMarket(false)
    this.props.actions.showSearchRegion(false)
  }

  initiateRequestsConsult() {
    let KPISELECTED = this.props.KPISELECTED
    let ACTUALCONFIG = this.props.ACTUALCONFIG
    let ADITIONALCHARTOPTIONS = this.props.ADITIONALCHARTOPTIONS
    let TYPECHART = this.props.TYPECHART
    let THEME = this.props.THEME
    let SINCETHEDATE = this.props.SINCETHEDATE
    let UNTILTHEDATE = this.props.UNTILTHEDATE
    let MERCADO = this.props.MERCADO
    let IDGROUP = this.props.IDGROUP
    //Se convertierte las cadenas de texto a formato Titulo
    let REGION = this.props.REGION.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })

    if (this.props.IDREGION !== null && this.props.MERCADO !== undefined) {
      this.props.actions.statisticsRequest({
        KPISELECTED,
        ACTUALCONFIG,
        ADITIONALCHARTOPTIONS,
        TYPECHART,
        THEME,
        SINCETHEDATE,
        UNTILTHEDATE,
        MERCADO,
        REGION,
        IDGROUP,
      })
    }
  }

  initiateRequestsErlang() {
    let KPISELECTED = this.props.KPISELECTED_ERLANG
    let ACTUALCONFIG = this.props.ACTUALCONFIG_ERLANG
    let ADITIONALCHARTOPTIONS = this.props.ADITIONALCHARTOPTIONS_ERLANG
    let TYPECHART = this.props.TYPECHART_ERLANG
    let THEME = this.props.THEME_ERLANG
    let SINCETHEDATE = this.props.SINCETHEDATE
    let UNTILTHEDATE = this.props.UNTILTHEDATE
    let MERCADO = this.props.MERCADO
    let IDGROUP = this.props.IDGROUP
    //Se convertierte las cadenas de texto a formato Titulo
    let REGION = this.props.REGION.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
    if (this.props.IDREGION !== null && this.props.MERCADO !== undefined) {
      this.props.actions.statisticsErlangRequest({
        KPISELECTED,
        ACTUALCONFIG,
        ADITIONALCHARTOPTIONS,
        TYPECHART,
        THEME,
        SINCETHEDATE,
        UNTILTHEDATE,
        MERCADO,
        REGION,
        IDGROUP,
      })
    }
  }

  initiateRequestsPayload() {
    let KPISELECTED = this.props.KPISELECTED_PAYLOAD
    let ACTUALCONFIG = this.props.ACTUALCONFIG_PAYLOAD
    let ADITIONALCHARTOPTIONS = this.props.ADITIONALCHARTOPTIONS_PAYLOAD
    let TYPECHART = this.props.TYPECHART_PAYLOAD
    let THEME = this.props.THEME_PAYLOAD
    let SINCETHEDATE = this.props.SINCETHEDATE
    let UNTILTHEDATE = this.props.UNTILTHEDATE
    let MERCADO = this.props.MERCADO
    let IDGROUP = this.props.IDGROUP

    //Se convertierte las cadenas de texto a formato Titulo
    let REGION = this.props.REGION.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })

    if (this.props.IDREGION !== null && this.props.MERCADO !== undefined) {
      this.props.actions.statisticsPayloadRequest({
        KPISELECTED,
        ACTUALCONFIG,
        ADITIONALCHARTOPTIONS,
        TYPECHART,
        THEME,
        SINCETHEDATE,
        UNTILTHEDATE,
        MERCADO,
        REGION,
        IDGROUP,
      })
    }
  }

  initiateRequestsCcr() {
    let KPISELECTED = this.props.KPISELECTED_CCR
    let ACTUALCONFIG = this.props.ACTUALCONFIG_CCR
    let ADITIONALCHARTOPTIONS = this.props.ADITIONALCHARTOPTIONS_CCR
    let TYPECHART = this.props.TYPECHART_CCR
    let THEME = this.props.THEME_CCR
    let SINCETHEDATE = this.props.SINCETHEDATE
    let UNTILTHEDATE = this.props.UNTILTHEDATE
    let MERCADO = this.props.MERCADO
    let IDGROUP = this.props.IDGROUP

    //Se convertierte las cadenas de texto a formato Titulo
    let REGION = this.props.REGION.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })

    if (this.props.IDREGION !== null && this.props.MERCADO !== undefined) {
      this.props.actions.statisticsCcrRequest({
        KPISELECTED,
        ACTUALCONFIG,
        ADITIONALCHARTOPTIONS,
        TYPECHART,
        THEME,
        SINCETHEDATE,
        UNTILTHEDATE,
        MERCADO,
        REGION,
        IDGROUP,
      })
    }
  }

  initiateRequestsPcr() {
    let KPISELECTED = this.props.KPISELECTED_PCR
    let ACTUALCONFIG = this.props.ACTUALCONFIG_PCR
    let ADITIONALCHARTOPTIONS = this.props.ADITIONALCHARTOPTIONS_PCR
    let TYPECHART = this.props.TYPECHART_PCR
    let THEME = this.props.THEME_PCR
    let SINCETHEDATE = this.props.SINCETHEDATE
    let UNTILTHEDATE = this.props.UNTILTHEDATE
    let MERCADO = this.props.MERCADO
    let IDGROUP = this.props.IDGROUP

    //Se convertierte las cadenas de texto a formato Titulo
    let REGION = this.props.REGION.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })

    if (this.props.IDREGION !== null && this.props.MERCADO !== undefined) {
      this.props.actions.statisticsPcrRequest({
        KPISELECTED,
        ACTUALCONFIG,
        ADITIONALCHARTOPTIONS,
        TYPECHART,
        THEME,
        SINCETHEDATE,
        UNTILTHEDATE,
        MERCADO,
        REGION,
        IDGROUP,
      })
    }
  }

  initiateRequestsUsers() {
    let KPISELECTED = this.props.KPISELECTED_USERS
    let ACTUALCONFIG = this.props.ACTUALCONFIG_USERS
    let ADITIONALCHARTOPTIONS = this.props.ADITIONALCHARTOPTIONS_USERS
    let TYPECHART = this.props.TYPECHART_USERS
    let THEME = this.props.THEME_ERLANG
    let SINCETHEDATE = this.props.SINCETHEDATE
    let UNTILTHEDATE = this.props.UNTILTHEDATE
    let MERCADO = this.props.MERCADO
    let IDGROUP = this.props.IDGROUP
    //Se convertierte las cadenas de texto a formato Titulo
    let REGION = this.props.REGION.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })

    if (this.props.IDREGION !== null && this.props.MERCADO !== undefined) {
      this.props.actions.statisticsUsersRequest({
        KPISELECTED,
        ACTUALCONFIG,
        ADITIONALCHARTOPTIONS,
        TYPECHART,
        THEME,
        SINCETHEDATE,
        UNTILTHEDATE,
        MERCADO,
        REGION,
        IDGROUP,
      })
    }
  }

  render() {
    return (
      <Div>
        <RefreshData refresh={this.initiateRequests} />
        <ContextualMenu />
        <Scrollbars
          style={{
            width: '100%',
            minWidth: '60em',
            height: '93.7vh',
            background: this.props.theme.secondaryLevelBgColor,
            color: this.props.theme.fontColor,
          }}
          renderThumbHorizontal={this.renderThumb}
          renderThumbVertical={this.renderThumb}
          autoHide
          // Hide delay in ms
          autoHideTimeout={1000}
          // Duration for hide animation in ms.
          autoHideDuration={200}
          onClick={this.handleHideMenusOusideEvent}
        >
          <Div
            css={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Div
              css={{
                margin: '1em 0 0.1em 0.3em',
                //fontFamily: '"Raleway", Arial, sans-serif',
                fontFamily: '"Roboto Condensed", sans-serif',
                fontSize: '22px',
                fontWeight: 'bold',
              }}
            >
              MERCADO {this.props.MERCADO !== undefined ? '>' : null}{' '}
              {this.props.MERCADO}{' '}
              {this.props.MERCADO !== undefined ? '>' : null}
              {this.props.consult ? ' MODO CONSULTA' : ' (ULTIMA SEMANA)'}
            </Div>
          </Div>
          <Breadcrumb
            initiateRequests={this.initiateRequests}
            initateRequestBasicLastMonth={this.initateRequestBasicLastMonth}
          />

          {this.props.consult ? (
            <ChartConsult
              handleHideMenuMarkets={this.handleHideMenuMarkets}
              contour="contour"
              typeChart="highstock"
              config={this.props.config}
              completeFetchData={this.props.completeFetchData}
              theme={this.props.themeErlang}
              handleChartOptions={this.handleChartOptions}
              initiateRequests={this.initiateRequests}
              handleSetChartOptions={this.props.actions.setChartOptions}
              handleSetStateChartOptions={
                this.props.actions.setStateChartOptions
              }
              selectorChartOptions={this.props.selectorChartOptions}
              stateChartOptions={this.props.stateChartOptions}
              services={this.props.services}
              showMarkets={this.props.showMarkets}
              showNav={this.props.showNav}
            />
          ) : (
            <Div>
              <Div
                css={{
                  display: 'block',
                  background: '##FFFFFF',
                  backgroundImage:
                    'linear-gradient(to bottom right, #FFFFFF 5%, #FFFFFF 100%)',
                  backgroundBlendMode: 'lighten',
                  borderRadius: '6px',
                  padding: '0em 0.5em 0.5em 0.5em',
                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
                  margin: '1em',
                }}
              >
                <Chart
                  contour="contour"
                  typeChart="highstock"
                  config={this.props.configErlang}
                  completeFetchData={this.props.completeFetchDataErlang}
                  theme={this.props.themeErlang}
                  handleChartOptions={this.handleChartOptionsErlang}
                  initiateRequests={this.initiateRequestsErlang}
                  handleSetChartOptions={
                    this.props.actions.setChartOptionsErlang
                  }
                  handleSetStateChartOptions={
                    this.props.actions.setStateChartOptionsErlang
                  }
                  selectorChartOptions={this.props.selectorChartOptionsErlang}
                  stateChartOptions={this.props.stateChartOptionsErlang}
                  services={this.props.servicesErlang}
                  showMarkets={this.props.showMarkets}
                  showNav={this.props.showNav}
                />
                <Div
                  css={{
                    width: '100%',
                    height: '.2em',
                    background: '#262626',
                  }}
                />
                <Chart
                  contour="contour"
                  typeChart="highstock"
                  config={this.props.configPayload}
                  completeFetchData={this.props.completeFetchDataPayload}
                  theme={this.props.themePayload}
                  handleChartOptions={this.handleChartOptionsPayload}
                  initiateRequests={this.initiateRequestsPayload}
                  handleSetChartOptions={
                    this.props.actions.setChartOptionsPayload
                  }
                  handleSetStateChartOptions={
                    this.props.actions.setStateChartOptionsPayload
                  }
                  selectorChartOptions={this.props.selectorChartOptionsPayload}
                  stateChartOptions={this.props.stateChartOptionsPayload}
                  services={this.props.servicesPayload}
                  showMarkets={this.props.showMarkets}
                  showNav={this.props.showNav}
                />
                <Div
                  css={{
                    width: '100%',
                    height: '.2em',
                    background: '#262626',
                  }}
                />
                <Chart
                  contour="contour"
                  typeChart="highstock"
                  config={this.props.configCcr}
                  completeFetchData={this.props.completeFetchDataCcr}
                  theme={this.props.themeCcr}
                  handleChartOptions={this.handleChartOptionsCcr}
                  initiateRequests={this.initiateRequestsCcr}
                  handleSetChartOptions={this.props.actions.setChartOptionsCcr}
                  handleSetStateChartOptions={
                    this.props.actions.setStateChartOptionsCcr
                  }
                  selectorChartOptions={this.props.selectorChartOptionsCcr}
                  stateChartOptions={this.props.stateChartOptionsCcr}
                  services={this.props.servicesCcr}
                  showMarkets={this.props.showMarkets}
                  showNav={this.props.showNav}
                />
                <Div
                  css={{
                    width: '100%',
                    height: '.2em',
                    background: '#262626',
                  }}
                />
                <Chart
                  contour="contour"
                  typeChart="highstock"
                  config={this.props.configPcr}
                  completeFetchData={this.props.completeFetchDataPcr}
                  theme={this.props.themePcr}
                  handleChartOptions={this.handleChartOptionsPcr}
                  initiateRequests={this.initiateRequestsPcr}
                  handleSetChartOptions={this.props.actions.setChartOptionsPcr}
                  handleSetStateChartOptions={
                    this.props.actions.setStateChartOptionsPcr
                  }
                  selectorChartOptions={this.props.selectorChartOptionsPcr}
                  stateChartOptions={this.props.stateChartOptionsPcr}
                  services={this.props.servicesPcr}
                  showMarkets={this.props.showMarkets}
                  showNav={this.props.showNav}
                />

                <Div
                  css={{
                    width: '100%',
                    height: '.2em',
                    background: '#262626',
                  }}
                />

                <Chart
                  contour="contour"
                  typeChart="highstock"
                  config={this.props.configUsers}
                  completeFetchData={this.props.completeFetchDataUsers}
                  theme={this.props.themeUsers}
                  handleChartOptions={this.handleChartOptionsUsers}
                  initiateRequests={this.initiateRequestsUsers}
                  handleSetChartOptions={this.props.actions.setChartOptionsUser}
                  handleSetStateChartOptions={
                    this.props.actions.setStateChartOptionsUsers
                  }
                  selectorChartOptions={this.props.selectorChartOptionsUsers}
                  stateChartOptions={this.props.stateChartOptionsUsers}
                  services={this.props.servicesUsers}
                  showMarkets={this.props.showMarkets}
                  showNav={this.props.showNav}
                />
              </Div>
            </Div>
          )}
        </Scrollbars>
      </Div>
    )
  }
}

const mapStateToProps = state => {
  return {
    showNav: state.toolbar.nav_show,
    selectorChartOptionsErlang:
      state.statisticsMarkets.selectorChartOptionsErlang,
    selectorChartOptionsPayload:
      state.statisticsMarkets.selectorChartOptionsPayload,
    selectorChartOptionsCcr: state.statisticsMarkets.selectorChartOptionsCcr,
    selectorChartOptionsPcr: state.statisticsMarkets.selectorChartOptionsPcr,
    selectorChartOptionsUsers:
      state.statisticsMarkets.selectorChartOptionsUsers,
    selectorChartOptions: state.statisticsMarkets.selectorChartOptions,

    stateChartOptionsErlang: state.statisticsMarkets.stateChartOptionsErlang,
    stateChartOptionsPayload: state.statisticsMarkets.stateChartOptionsPayload,
    stateChartOptionsCcr: state.statisticsMarkets.stateChartOptionsCcr,
    stateChartOptionsPcr: state.statisticsMarkets.stateChartOptionsPcr,
    stateChartOptionsUsers: state.statisticsMarkets.stateChartOptionsUsers,
    stateChartOptions: state.statisticsMarkets.stateChartOptions,

    servicesErlang: state.statisticsMarkets.servicesErlang,
    servicesPayload: state.statisticsMarkets.servicesPayload,
    servicesCcr: state.statisticsMarkets.servicesCcr,
    servicesPcr: state.statisticsMarkets.servicesPcr,
    servicesUsers: state.statisticsMarkets.servicesUsers,
    services: state.statisticsMarkets.services,

    showMarkets: state.statisticsMarkets.showMarkets,

    configErlang: state.statisticsMarkets.configErlang,
    configPayload: state.statisticsMarkets.configPayload,
    configCcr: state.statisticsMarkets.configCcr,
    configPcr: state.statisticsMarkets.configPcr,
    configUsers: state.statisticsMarkets.configUsers,
    config: state.statisticsMarkets.config,

    themeErlang: state.statisticsMarkets.themeErlang,
    themePayload: state.statisticsMarkets.themePayload,
    themeCcr: state.statisticsMarkets.themeCcr,
    themePcr: state.statisticsMarkets.themePcr,
    themeUsers: state.statisticsMarkets.themeUsers,

    completeFetchDataErlang: state.statisticsMarkets.completeFetchDataErlang,
    completeFetchDataPayload: state.statisticsMarkets.completeFetchDataPayload,
    completeFetchDataCcr: state.statisticsMarkets.completeFetchDataCcr,
    completeFetchDataPcr: state.statisticsMarkets.completeFetchDataPcr,
    completeFetchDataUsers: state.statisticsMarkets.completeFetchDataUsers,
    completeFetchData: state.statisticsMarkets.completeFetchData,

    dropMenuShowSelectorLapse:
      state.statisticsMarkets.dropMenuShowSelectorLapse,

    KPISELECTED_ERLANG:
      state.statisticsMarkets.selectorChartOptionsErlang.column1.kpiSelected,
    KPISELECTED_PAYLOAD:
      state.statisticsMarkets.selectorChartOptionsPayload.column1.kpiSelected,
    KPISELECTED_CCR:
      state.statisticsMarkets.selectorChartOptionsCcr.column1.kpiSelected,
    KPISELECTED_PCR:
      state.statisticsMarkets.selectorChartOptionsPcr.column1.kpiSelected,
    KPISELECTED_USERS:
      state.statisticsMarkets.selectorChartOptionsUsers.column1.kpiSelected,
    KPISELECTED:
      state.statisticsMarkets.selectorChartOptions.column1.kpiSelected,

    ACTUALCONFIG_ERLANG: state.statisticsMarkets.configErlang,
    ACTUALCONFIG_PAYLOAD: state.statisticsMarkets.configPayload,
    ACTUALCONFIG_CCR: state.statisticsMarkets.configCcr,
    ACTUALCONFIG_PCR: state.statisticsMarkets.configPcr,
    ACTUALCONFIG_USERS: state.statisticsMarkets.configUsers,
    ACTUALCONFIG: state.statisticsMarkets.config,

    THEME_ERLANG: state.statisticsMarkets.themeErlang,
    THEME_PAYLOAD: state.statisticsMarkets.themePayload,
    THEME_CCR: state.statisticsMarkets.themeCcr,
    THEME_PCR: state.statisticsMarkets.themePcr,
    THEME_USERS: state.statisticsMarkets.themeUsers,
    THEME: state.statisticsMarkets.theme,

    TYPECHART_ERLANG:
      state.statisticsMarkets.selectorChartOptionsErlang.column1
        .typeChartSelected,
    TYPECHART_PAYLOAD:
      state.statisticsMarkets.selectorChartOptionsPayload.column1
        .typeChartSelected,
    TYPECHART_CCR:
      state.statisticsMarkets.selectorChartOptionsCcr.column1.typeChartSelected,
    TYPECHART_PCR:
      state.statisticsMarkets.selectorChartOptionsPcr.column1.typeChartSelected,
    TYPECHART_USERS:
      state.statisticsMarkets.selectorChartOptionsUsers.column1
        .typeChartSelected,
    TYPECHART:
      state.statisticsMarkets.selectorChartOptions.column1.typeChartSelected,

    ADITIONALCHARTOPTIONS_ERLANG:
      state.statisticsMarkets.selectorChartOptionsErlang,
    ADITIONALCHARTOPTIONS_PAYLOAD:
      state.statisticsMarkets.selectorChartOptionsPayload,
    ADITIONALCHARTOPTIONS_CCR: state.statisticsMarkets.selectorChartOptionsCcr,
    ADITIONALCHARTOPTIONS_PCR: state.statisticsMarkets.selectorChartOptionsPcr,
    ADITIONALCHARTOPTIONS_USERS:
      state.statisticsMarkets.selectorChartOptionsUsers,
    ADITIONALCHARTOPTIONS: state.statisticsMarkets.selectorChartOptions,

    IDREGION: state.statisticsMarkets.selectedRegion.ID,
    SINCETHEDATE: state.statisticsMarkets.selectedTimeLapse.since,
    UNTILTHEDATE: state.statisticsMarkets.selectedTimeLapse.until,
    REGION: state.statisticsMarkets.selectedRegion.REGION,
    MERCADO: state.statisticsMarkets.selectedMarket.MERCADO,
    IDGROUP: state.statisticsMarkets.selectedGroup.ID,

    consult: state.statisticsMarkets.consult,
    markets: state.statisticsMarkets.markets,

    stateGroupOption: state.statisticsMarkets.stateGroupOption,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        setChartOptionsErlang,
        setChartOptionsPayload,
        setChartOptionsCcr,
        setChartOptionsPcr,
        setChartOptionsUser,
        setStateChartOptionsErlang,
        setStateChartOptionsPayload,
        setStateChartOptionsCcr,
        setStateChartOptionsPcr,
        setStateChartOptionsUsers,
        setStateChartOptions,
        setConfigChartConsult,
        setConfigChartErlang,
        setConfigChartPayload,
        setConfigChartCcr,
        setConfigChartPcr,
        setConfigChartUsers,
        setPreloaderStateErlang,
        setPreloaderStatePayload,
        setPreloaderStateCcr,
        setPreloaderStatePcr,
        setPreloaderStateUsers,
        menuSelectorLapse,
        statisticsErlangRequest,
        statisticsPayloadRequest,
        statisticsCcrRequest,
        statisticsPcrRequest,
        statisticsUsersRequest,
        statisticsRequest,
        showMarket,
        showSearchMarket,
        selectedMarket,
        showSearchRegion,
        setSetStateGroupMenu,
        changeConsultState,
      },
      dispatch
    ),
  }
}

const MarketsConnect = connect(mapStateToProps, mapDispatchToProps)(
  withTheme(Markets)
)

export default MarketsConnect
