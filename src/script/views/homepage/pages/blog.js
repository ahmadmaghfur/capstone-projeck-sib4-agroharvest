// import { allArticles, elements } from '../../../../public/assets/js/blog-creator';
// import allArticles from '../../../../public/assets/js/blog-creator';
// import '../../../../public/assets/js/blog-creator';

import dataPosts from '../../../utils/dataBlogs';
import { formatDate } from '../../../utils/functions';

const Blog = {

  async render() {
    return `
    <!-- Blog -->
    <div class="container my-5 pt-3 " id="blog">
      <header id="header">
        <div class="row">
          <div class="col-sm-12 head-column">
            <h1 class="fw-bold text-center" style="color: #012970;">Blog</h1>
          </div>

        </div>
      </header>
    </div>
    <div class="container">
      <div class="col-md-12">
        <div id="postsList" class="mb-5 pb-5">
        </div>
      </div>
    </div>
    
    `;
  },

  async afterRender() {
    const fetchedBlog = await dataPosts._fetchAllDataPosts();
    const postsList = document.getElementById('postsList');
    document.querySelector('#navBlog').classList.add('active');
    fetchedBlog.forEach((d) => {
      const data = d.data();
      data.id = d.id;

      postsList.innerHTML += `
      <div class="blog-card" style="background-color:#AEBDCA;">
        <div class="meta">
          <div class="photo" style="background-image: url(${data.foto})"></div>
          <ul class="details">
            <li class="author">${data.kategori}</li>
            <li class="date">${formatDate(data.tgl_dibuat)}</li>
          </ul>
        </div>
        <div class="description">
          <h1>${data.judul}</h1>
          <p class="read-more">
            <a href="#/detailBlog/${data.id}">Read More</a>
          </p>
          <span class="detail">${data.deskripsi}</span>
        </div>
      </div>`;
    });
  },
};

export default Blog;
