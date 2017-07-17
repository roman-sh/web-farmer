import axios from 'axios';

const pageUrl = 'http://localhost:3003/data/page';

if (process.env.NODE_ENV !== 'development') {
    url = '/data/page';
}

const getPage = () => {
    console.log('getPage entered');
    // getting page._id from URL
    let publishUrl = window.location.href.split('/');
    let publishUrlId = publishUrl[publishUrl.length-1];
    
    return axios.get(`${pageUrl}/${publishUrlId}`)
        .then(function (res) {
            const page = res.data;
            return page;
        })
        .catch(err => {
          console.error('page.service.getPage error: ', err);
        });
}

const addPage = page => {
    return axios.post(pageUrl, page)
        .then(function (res) {
            const addedPage = res.data;
            return addedPage;
        })
        .catch(err => {
          console.error('page.service.addPage error: ', err);
        });
}
const updatePage = page => {
    axios.put(`${pageUrl}/${page._id}`, page)
        .catch(err => {
          console.error('page.service.updatePage error: ', err);
        });
    // return axios.put(`${pageUrl}/${page._id}`, page)
    //     .then(function (res) {
    //         const updatedPage = res.data;
    //         return updatedPage;
    //     })
}
// const savePage = page => {
//     // console.log('page.service-savePage-page: ',page)
//     if (page._id)   return updatePage(page);
//     else            return addPage(page);
// }

export default {
    // savePage
    updatePage,
    addPage,
    getPage
}
