<template>
  <div>
    <city-header></city-header>
    <city-search :cities="data.cities"></city-search>
    <city-list
      :cities="data.cities"
      :hotCities="data.hotCities"
      :letter="letterRef">
    </city-list>
    <city-alphabet
      :cities="data.cities"
      @change="handleLetterChange">
    </city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
import {onMounted, reactive, toRefs, ref} from "vue";
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  setup() {
    let { letterRef, handleLetterChange } = useLetterLogic()
    let { data } = useCityLogic()
    return { data, letterRef, handleLetterChange}
  }
}

function useCityLogic() {
  const data = reactive({
    hotCities: [],
    cities: {},
    letter: ''
  })

  async function getCityInfo () {
    let res = await axios.get('/api/city.json')
    res = res.data
    if (res.ret && res.data) {
      let result = res.data
      data.cities = result.cities
      data.hotCities = result.hotCities
    }
  }

  onMounted (() => { getCityInfo() })
  return { data }
}
function useLetterLogic() {
  const letterRef = ref('')
  function handleLetterChange (selected) {
    letterRef.value = selected
  }
  return { letterRef, handleLetterChange }
}
</script>

<style lang="stylus" scoped>

</style>
