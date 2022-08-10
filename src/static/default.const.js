import axios from 'axios'
import {
  faBriefcase,
  faHome,
  faMapMarkerAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { environment } from './environment.dev'

export const defaultAddressesData = async() => await axios.get(`${environment.apiRest}/addresses`)
export const defaultCompaniesData = async() => await axios.get(`${environment.apiRest}/companies`)
export const defaultUsersData = async() => await axios.get(`${environment.apiRest}/users`)

export const defaultCompaniesSort = [
  { label: 'Ascending', value: 'asc' },
  { label: 'Descending', value: 'desc' }
]

export const defaultMenuItems = [
  {
    label: 'Dashboard',
    value: 0,
    routeLink: '/',
    icon: faHome,
    displayOnDashboard: false,
    hideFromView: false,
    colorType: ''
  },
  {
    label: 'Companies',
    value: 1,
    routeLink: '/companies',
    icon: faBriefcase,
    displayOnDashboard: true,
    hideFromView: false,
    colorType: 'success',
  },
  {
    label: 'Find Address',
    value: 2,
    routeLink: '/find-address',
    icon: faMapMarkerAlt,
    displayOnDashboard: true,
    hideFromView: false,
    colorType: 'info'
  },
  {
    label: 'Find Address Details',
    value: 3,
    routeLink: '/find-address-details',
    icon: faMapMarkerAlt,
    displayOnDashboard: false,
    hideFromView: true,
    colorType: ''
  },
  {
    label: 'Users',
    value: 4,
    routeLink: '/users',
    icon: faUsers,
    displayOnDashboard: true,
    hideFromView: false,
    colorType: 'error'
  }
]

export const defaultUserAccountStatus = [
  { label: "Active", value: true },
  { label: "Disabled", value: false }
]

export const defaultUserTitles = [
  { label: "Mr", value: "Mr." },
  { label: "Mrs", value: "Mrs." },
  { label: "Ms", value: "Ms." },
  { label: "Miss", value: "Miss." },
  { label: "Dr", value: "Dr." },
  { label: "Professor", value: "Professor." }
]