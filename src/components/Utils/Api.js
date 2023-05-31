export default {
  getItems: () => {
    return fetch('http://content.guardianapis.com/search?api-key=test&amp;show-fields=thumbnail,headline&amp;page=1&amp;page-size=10')
      .then(res => res.json());
  },
  getItembyWord: (searchKey,pageNo=1) =>{
      return fetch(`http://content.guardianapis.com/search?api-key=test&amp;q=${searchKey}&amp;show-fields=thumbnail,headline&amp;page=${pageNo}&amp;page-size=10`)
      .then(res => res.json());
  },
  getItemByKey:(searchKey,pageNo=1,keyword)=>{
      return fetch(`http://content.guardianapis.com/search?api-key=test&amp;q=${searchKey}&amp;show-fields=thumbnail,headline&amp;show-tags=${keyword}&amp;page=${pageNo}&amp;page-size=10`)
      .then(res => res.json());
  }
}