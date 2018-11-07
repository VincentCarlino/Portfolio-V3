<template>
  <div v-scroll-reveal id="article-content">
      <!-- Pass in array of objects which contain a tag type, content. Parse into html-->

  </div>
</template>

<script>

export default {
  name: 'ArticleContent',
  props: ['article'],
  methods: {
      generate: function(content) {
          var article = document.getElementById('article-content');

          content.forEach(element => {
            var newElem = document.createElement(element.tag);
              if(element.tag == 'img') {
                  newElem.setAttribute('src', element.content);
              }
              else {
                  newElem.appendChild(document.createTextNode(element.content));
              }

            var breakElem = document.createElement('br');
              article.appendChild(newElem);
              article.appendChild(breakElem);

          });
      }
  },
  mounted(){
    this.generate(this.article)
  }
}
</script>

<style lang="scss" scoped>
</style>