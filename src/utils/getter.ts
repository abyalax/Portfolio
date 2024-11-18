import nodejs from "/assets/tools/nodejs.png"
import html from "/assets/tools/html.webp"
import css from "/assets/tools/css.webp"
import ts from "/assets/tools/ts.webp"
import vscode from "/assets/tools/vscode.png"
import tailwinds from "/assets/tools/tailwinds.png"
import react from "/assets/tools/react.webp"
import postman from "/assets/tools/postman.png"
import mongodb from "/assets/tools/mongodb.webp"
import cloudinary from "/assets/tools/cloudinary.png"
import git from "/assets/tools/git.webp"
import github from "/assets/tools/github.webp"
import js from "/assets/tools/js.webp"
import nextjs from "/assets/tools/nextjs.png"

import webProfileImage from "/assets/img/web-profile.png"

import tokopediaMain from "/assets/img/tokopedia.png"
import tokopediaProducts from "/assets/img/products-tokopedia.png"
import tokopediaProduct from "/assets/img/product-tokopedia.png"
import tokopediaLogin from "/assets/img/login-tokopedia.png"
import tokopediaRegister from "/assets/img/register-tokopedia.png"
import tokopediaCreateStore1 from "/assets/img/crstore1-tokopedia.png"
import tokopediaCreateStore2 from "/assets/img/crstore2-tokopedia.png"
import tokopediaSeller1 from "/assets/img/seller1-tokopedia.png"
import tokopediaSeller2 from "/assets/img/seller2-tokopedia.png"
import tokopediaAddProduct1 from "/assets/img/addproduct-tokopedia.png"
import tokopediaAddProduct2 from "/assets/img/addproduct2-tokopedia.png"

import blog from "/assets/img/blog-cms.png"

import groqDark from "/assets/img/groq-dark.png"
import groqLight from "/assets/img/groq-light.png"
import groqLightChat from "/assets/img/groq-light-chat.png"
import groqDarkChat from "/assets/img/groq-dark-chat.png"


import invoicesDashboard from "/assets/img/invoices-dahsboard.png"
import invoicesLogin from "/assets/img/invoices-login.png"
import invoicesList from "/assets/img/invoices-list.png"
import invoicesHome from "/assets/img/invoices-home.png"


import githubIcon from "/assets/svg/github.svg"
import linkIcon from "/assets/svg/link.svg"
import twitter from "/assets/svg/twitter.svg"
import instagram from "/assets/svg/instagram.svg"
import linkedin from "/assets/svg/linkedin.svg"

import hris1 from "/assets/img/hris/1.png"
import hris2 from "/assets/img/hris/2.png"
import hris3 from "/assets/img/hris/3.png"
import hris4 from "/assets/img/hris/4.png"
import hris5 from "/assets/img/hris/5.png"
import hris6 from "/assets/img/hris/6.png"
import hris7 from "/assets/img/hris/7.png"

const tools = {
    nodejs, html, css, ts, vscode, react, tailwinds,
    postman, mongodb, cloudinary, git, github, js,
    nextjs
}

const tokopedia = [
    tokopediaAddProduct1, tokopediaAddProduct2, tokopediaCreateStore1, tokopediaCreateStore2,
    tokopediaProduct, tokopediaProducts, tokopediaRegister, tokopediaSeller1, tokopediaSeller2,
    tokopediaLogin, tokopediaMain
]

const groq = [
    groqDarkChat, groqLightChat, groqDark, groqLight,
]

const webProfile = [
    webProfileImage
]

const invoices = [
    invoicesDashboard, invoicesHome, invoicesList, invoicesLogin,
]

const blogCMS = [blog]

const hris = [
    hris1, 
    hris2, hris3, hris4, hris5, hris6, hris7
]

const projects = {
    webProfile, blogCMS, hris, tokopedia, invoices, groq
}




const svgIcon = {
    githubIcon, linkIcon
}

const socmedIcon = {
    twitter, instagram, linkedin
}


export { tools, projects, svgIcon, socmedIcon }