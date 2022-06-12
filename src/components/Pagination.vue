<script setup lang="ts"></script>

<template>
  <div class="pagination">
    <a href="#">&laquo;</a>
    <a href="#" class="active">1</a>
    <a href="#">2</a>
    <a href="#">3</a>
    <a href="#">&raquo;</a>
  </div>
</template>

<style>
.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  margin-inline: 5px;
}

.pagination a.active {
  background-color: #1b2b65;
  color: white;
  border-radius: 4px;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
  border-radius: 4px;
}
</style>
