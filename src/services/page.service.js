import axios from 'axios';

var pageUrl = 'http://localhost:3003/data/page';
if (process.env.NODE_ENV !== 'development') {
    pageUrl = '/data/page';
}

// getting page._id from URL
const getId = () => {
    var urlStr = window.location.href;
    var urlArr = urlStr.split('/');
    if (urlArr[urlArr.length-1]) {
            return urlArr[urlArr.length-1];
    } else  return urlArr[urlArr.length-2];
}

const getPage = () => {
    return axios.get(`${pageUrl}/${getId()}`)
        .then(function (res) {
            console.log('service-get-then')
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
            console.log('service-post-then')
            const addedPage = res.data;
            return addedPage;
        })
        .catch(err => {
          console.error('page.service.addPage error: ', err);
        });
}
const updatePage = page => {
    axios.put(`${pageUrl}/${page._id}`, page)
        .then(function (res) {
            console.log('service-put-then')
        })
        .catch(err => {
          console.error('page.service.updatePage error: ', err);
        });
}


export default {
    updatePage,
    addPage,
    getPage
}
