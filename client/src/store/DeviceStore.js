import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
  constructor(props) {
    this._types = []
    this._brands = []
    this._devices = [
      { id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://images.biggeek.ru/1/435/844b/12458-869bigeek_image1.jpeg` },
      { id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://images.biggeek.ru/1/435/844b/12458-869bigeek_image1.jpeg` },
      { id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://images.biggeek.ru/1/435/844b/12458-869bigeek_image1.jpeg` },
      { id: 4, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://images.biggeek.ru/1/435/844b/12458-869bigeek_image1.jpeg` },
      { id: 5, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://images.biggeek.ru/1/435/844b/12458-869bigeek_image1.jpeg` },
      { id: 6, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://images.biggeek.ru/1/435/844b/12458-869bigeek_image1.jpeg` },
      { id: 7, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://images.biggeek.ru/1/435/844b/12458-869bigeek_image1.jpeg` },
    ]
    this._selectedType = {}
    this._selectedBrand = {}
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  setDevices(devices) {
    this._devices = devices
  }
  setSelectedType(type) {
    this._selectedType = type
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand
  }
  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }
  get devices() {
    return this._devices
  }
  get selectedType() {
    return this._selectedType
  }
  get selectedBrand() {
    return this._selectedBrand
  }
}