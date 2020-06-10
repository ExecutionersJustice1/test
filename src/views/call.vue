<template>
 <div class="call">
  <p>Калорийность продуктов(некоторая)</p>
  <center>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Продукт (данные на 100 гр. продукта)</th>
          <th scope="col">Кал.</th>
          <th scope="col">Бел.</th>
          <th scope="col">Жиры</th>
          <th scope="col">Угл.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Вода Ливония (г. Владивосток)</th>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
        </tr>
        <tr>
          <th scope="row">Вода Перье (PERRIER)</th>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>0.0</td>
        </tr>
        <tr>
          <th scope="row">Квас хлебный</th>
            <td>27.0</td>
            <td>0.2</td>
            <td>0.0</td>
            <td>5.2</td>
        </tr>
        <tr>
          <th scope="row">Кофе на молоке</th>
            <td>58.0</td>
            <td>0.7</td>
            <td>1.0</td>
            <td>11.2</td>
        </tr>
        <tr>
          <th scope="row">Кофе на сгущёном молоке</th>
            <td>55.0</td>
            <td>0.7</td>
            <td>0.9</td>
            <td>10.9</td>
        </tr>
        <tr>
          <th scope="row">Кофе чёрный без сахара</th>
            <td>7.0</td>
            <td>0.2</td>
            <td>0.5</td>
            <td>0.2</td>
        </tr>
        <tr>
          <th scope="row">Нодапитки газированные на плодово-ягодных настояха</th>
            <td>46.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>9.5</td>
        </tr>
        <tr>
          <th scope="row">Напитки газированные на цитрусовых настоях</th>
            <td>33.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>7.5</td>
        </tr>
        <tr>
          <th scope="row">Напитки газированные на эссенциях («Кока-кола», «Пепси-кола»)</th>
            <td>38.0</td>
            <td>0.0</td>
            <td>0.0</td>
            <td>8.7</td>
        </tr>
        <tr>
          <th scope="row">Чай заваренный с лимоном</th>
            <td>28.0</td>
            <td>0.1</td>
            <td>0.0</td>
            <td>6.8</td>
        </tr>
      </tbody>
    </table>    
  </center>
  </div>
</template>






<script>
 export default{
  name:'call',
  data (){
   return{
    title:'call'
   }
  }
 }
</script>




<style scoped>
 .table{
    width: 50%;
 }
</style>