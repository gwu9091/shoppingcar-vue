<script>
// 1. 如果您是使用 npm/yarn 安裝的 Swiper，需要在這裡引入
// import Swiper from 'swiper';
// import 'swiper/css'; // 如果沒有在 main.js 中全局引入 CSS，這裡也要引入

export default {
    name: 'ShopIndex',
    // data, methods, computed 等邏輯放在這裡

    mounted() {
        // 2. 將 Swiper 的初始化程式碼移到 mounted() 中，確保 DOM 元素存在
        // 假設 Swiper 是通過 CDN 全局載入的 (在 public/index.html 中)
        if (typeof Swiper !== 'undefined') {
            var swiper = new Swiper(".mySwiper", {
                cssMode: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                },
                mousewheel: true,
                keyboard: true,
                loop: true,
            });
        }

        // 3. AOS 初始化也必須在這裡或 main.js 執行，確保 DOM 存在
        if (typeof AOS !== 'undefined') {
            AOS.init();
        }
    }
}
</script>
<template>
    <nav class="navbar navbar-expand-md bg-body-tertiary mypadding-nav">
        <div class="container-fluid">
            <!-- 這裡可以放 Logo -->
            <img src="../assets/img/A.jpg" alt="" class="mylogo rounded-circle">
            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- 收合內容 -->
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav d-flex justify-content-center align-items-center">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                    <li class="nav-item d-flex align-items-center position-relative">
                        <RouterLink class="nav-link px-2" to="/shoppcar1">
                            <i class="bi bi-cart-fill"></i>
                        </RouterLink>
                        <a class="nav-link px-2 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="bi bi-person-circle"></i>
                        </a>
                        <ul id="myposition-dropdown" class="dropdown-menu container-fluid">
                            <li><a class="dropdown-item" href="#">Login</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <main>
        <!-- Swiper -->
        <div class="swiper mySwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../assets/img/A.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../assets/img/B.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../assets/img/C.jpg" alt=""></div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="container">
            <div class="d-flex justify-content-center text-center flex-column my-5" data-aos="fade-up">
                <h1 class="my-5">Raw Denim Heirloom Man Braid</h1>
                <p>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo<br> juice
                    poutine, ramps microdosing banh mi pug.</p>
                <hr style="background-color:blue; opacity:1; width:10%; height: 3px;" class="m-auto mt-3">
            </div>
            <section class="row justify-content-around">
                <div class="col-12 col-md-4 card text-center align-items-center myborder px-3 py-5"
                    data-aos="fade-up-right">
                    <div class="card-body">
                        <div
                            class="bg-info d-flex rounded-circle mycircle align-items-center justify-content-center m-auto mb-5 text-primary">
                            <i class="bi bi-graph-up fs-1"></i>
                        </div>
                        <p class="card-text">Shooting Stars</p>
                        <p class="card-text">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.
                            Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.
                        </p>
                        <a href="#" class="btn text-info">learn more<i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
                <div class="col-12 col-md-4 card text-center align-items-center myborder px-3 py-5" data-aos="flip-up">
                    <div class="card-body">
                        <div class=" bg-info d-flex rounded-circle mycircle align-items-center justify-content-center
            m-auto mb-5 text-primary"><i class="bi bi-scissors fs-1"></i></div>
                        <p class="card-text">The Catalyzer</p>
                        <p class="card-text">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.
                            Gastropub indxgo
                            juice poutine, ramps microdosing banh mi pug VHS try-hard.
                        </p>
                        <a href="#" class="btn text-info">learn more<i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
                <div class="col-12 col-md-4 card text-center align-items-center myborder px-3 py-5"
                    data-aos="fade-up-left"> >
                    <div class=" card-body">
                        <div
                            class="bg-info d-flex rounded-circle mycircle align-items-center justify-content-center m-auto mb-5 text-primary">
                            <i class="bi bi-person fs-1"></i>
                        </div>
                        <p class="card-text">Neptune</p>
                        <p class="card-text">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.
                            Gastropub
                            indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.
                        </p>
                        <a href="#" class="btn text-info">learn more<i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
                <button class="btn btn-primary mb-5" style="width:100px ;">button</button>
            </section>
            <div class="row d-flex flex-wrap mypadding-text-1 py-5 px-1">
                <h4 class="col-12 col-md-3 ps-5 mypadding-text-2">Master Cleanse <br class="d-lg-flex d-none"> Reliac
                    Heirloom.</h4>
                <p class="col-12 col-md-9">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify,
                    subway
                    tile poke farm-to-table.
                    Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.
                </p>
            </div>
            <div class="row ps-3 myrow px-1 py-5">
                <div class="col-6">
                    <div class="row p-1">
                        <div class="col-6"><img class="w-100" src="https://dummyimage.com/500x300/" alt=""></div>
                        <div class="col-6"><img class="w-100" src="https://dummyimage.com/500x300/" alt=""></div>
                    </div>
                    <div class="row p-1">
                        <div class="col-12">
                            <img class="w-100" src="https://dummyimage.com/600x360/" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row p-1">
                        <div class="col-12">
                            <img class="w-100" src="https://dummyimage.com/600x360/" alt="">
                        </div>
                    </div>
                    <div class="row p-1">
                        <div class="col-6"><img class="w-100" src="https://dummyimage.com/500x300/" alt=""></div>
                        <div class="col-6"><img class="w-100" src="https://dummyimage.com/500x300/" alt=""></div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center text-center flex-column my-5 mx-5">
                <h2 class="my-5">Pricing</h2>
                <p class="mb-5">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel
                    artisan direct
                    trade mumblecore 3 wolf moon twee
                </p>
                <table class="table  m-auto">
                    <thead>
                        <tr>
                            <th scope="col" class="table-active" data-v-inspector="src/views/index.vue:178:25">Plan</th>
                            <td class="table-active" data-v-inspector="src/views/index.vue:179:25">Speed</td>
                            <td class="table-active" data-v-inspector="src/views/index.vue:180:25">Storage</td>
                            <td class="table-active" data-v-inspector="src/views/index.vue:181:25">Price</td>
                            <td class="table-active" data-v-inspector="src/views/index.vue:182:25"></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Start</th>
                            <td>5 Mb/s</td>
                            <td>15 GB</td>
                            <td>Free</td>
                            <td><input type="radio"></td>
                        </tr>
                        <tr>
                            <th scope="row">Pro</th>
                            <td>25 Mb/s</td>
                            <td>25 GB</td>
                            <td>$24</td>
                            <td><input type="radio"></td>
                        </tr>
                        <tr>
                            <th scope="row">Business</th>
                            <td>36 Mb/s</td>
                            <td>40 GB</td>
                            <td>$50</td>
                            <td><input type="radio"></td>
                        </tr>
                        <tr>
                            <th scope="">Exclusive</th>
                            <td>48 Mb/s</td>
                            <td>120 GB</td>
                            <td>$72</td>
                            <td><input type="radio"></td>
                        </tr>
                    </tbody>
                </table>
                <div class="d-flex justify-content-between my-5">
                    <a href="#" class="btn text-info">learn more<i class="bi bi-arrow-right"></i></a>
                    <button class="btn btn-primary mb-5" style="width:100px ;">button</button>
                </div>
            </div>
            <div class="row d-flex flex-wrap mypadding-text-1 py-5 px-1">
                <h4 class="col-12 col-md-6 ps-5 mypadding-text-2 mb-3 myafter">Pitchfork Kickstarter Taxidermy</h4>
                <p class="col-12 col-md-6">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify,
                    subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing
                    selfies heirloom prism food truck ugh squid celiac humblebrag.
                </p>
            </div>
            <div class="row justify-content-around px-5 g-4">
                <div class="col-12 col-lg-3">
                    <div class="card h-100">
                        <img src="https://dummyimage.com/720x400" class="card-img-top w-100 px-3 pt-3" alt="">
                        <a href="" class="px-3 ">SUBTITLE</a>
                        <div class="card-body">

                            <h5 class="card-title my-3">Chichen Itza</h5>
                            <p class="card-text mb-5">Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                                hexagon disrupt edison bulbche.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-3">
                    <div class="card h-100">
                        <img src="https://dummyimage.com/720x400" class="card-img-top w-100 px-3 pt-3" alt="">
                        <a href="" class="px-3 ">SUBTITLE</a>
                        <div class="card-body">

                            <h5 class="card-title my-3">Colosseum Roma</h5>
                            <p class="card-text mb-5">Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                                hexagon disrupt edison bulbche.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-3">
                    <div class="card h-100">
                        <img src="https://dummyimage.com/720x400" class="card-img-top w-100 px-3 pt-3" alt="">
                        <a href="" class="px-3 ">SUBTITLE</a>
                        <div class="card-body">

                            <h5 class="card-title my-3">Great Pyramid of Gizaa</h5>
                            <p class="card-text mb-5">Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                                hexagon disrupt edison bulbche.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-3">
                    <div class="card h-100">
                        <img src="https://dummyimage.com/720x400" class="card-img-top w-100 px-3 pt-3" alt="">
                        <a href="" class="px-3 ">SUBTITLE</a>
                        <div class="card-body">

                            <h5 class="card-title my-3">San Francisco</h5>
                            <p class="card-text mb-5">Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                                hexagon disrupt edison bulbche.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="mypadding-card m-auto">
                    <section class="row py-2">
                        <div
                            class="col-12 col-lg-2 bg-info d-flex rounded-circle mycircle align-items-center justify-content-center m-auto mb-5 text-primary">
                            <i class="bi bi-graph-up fs-1"></i>
                        </div>
                        <div class="col-12 col-lg-10 d-flex flex-column justify-content-center">
                            <p>First featurette heading. It’ll blow your mind.
                            </p>
                            <p class="lead mp-3">Some great placeholder content for the first featurette here. Imagine
                                some
                                exciting prose here.</p>
                            <a href="#" class="btn text-info d-flex justify-self-start">learn more<i
                                    class="bi bi-arrow-right"></i></a>
                        </div>
                    </section>
                    <hr>
                    <section class="row py-2">
                        <div class="col-12 col-lg-10 d-flex flex-column justify-content-center mb-3 ">
                            <p>Oh yeah, it’s that good. See for yourself.
                            </p>
                            <p class="lead ">Some great placeholder content for the first featurette here. Imagine some
                                exciting prose here.</p>
                            <a href="#" class="btn text-info d-flex justify-self-start">learn more<i
                                    class="bi bi-arrow-right"></i></a>
                        </div>
                        <div class="col-12 col-lg-2 bg-info d-flex rounded-circle mycircle align-items-center justify-content-center
            m-auto mb-5 text-primary order-lg-1"><i class="bi bi-scissors fs-1"></i></div>
                    </section>
                    <hr>
                    <section class="row py-2">
                        <div
                            class="col-12 col-lg-2 bg-info d-flex rounded-circle mycircle align-items-center justify-content-center m-auto mb-5 text-primary">
                            <i class="bi bi-person fs-1"></i>
                        </div>
                        <div class="col-12 col-lg-10 d-flex flex-column justify-content-center">
                            <p>First featurette heading. It’ll blow your mind.
                            </p>
                            <p class="lead mp-3">Some great placeholder content for the first featurette here. Imagine
                                some
                                exciting prose here.</p>
                            <a href="#" class="btn text-info d-flex justify-self-start">learn more<i
                                    class="bi bi-arrow-right"></i></a>
                        </div>
                    </section>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-primary" style="width:100px;">button</button>
                    </div>
                </div>
                <div class="row my-5">
                    <div class="col-12 col-lg-6">
                        <img src="https://dummyimage.com/400x400/" alt="" class="w-100">
                    </div>
                    <div class="col-12 col-lg-6 d-flex flex-column align-items-start justify-content-center">
                        <p>BRAND NAME</p>
                        <h2>The Catcher in the Rye</h2>
                        <div><i class="bi bi-star-fill text-primary"></i><i class="bi bi-star-fill text-primary"></i><i
                                class="bi bi-star-fill text-primary"></i><i class="bi bi-star-fill text-primary"></i><i
                                class="bi bi-star text-primary"></i>&nbsp;&nbsp;4 Reviews&nbsp;&nbsp;<i
                                class="bi bi-facebook"></i>&nbsp;<i class="bi bi-twitter"></i>&nbsp;<i
                                class="bi bi-chat-fill"></i></div>
                        <p>Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia
                            microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn.
                            Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over,
                            neutra jean shorts keytar banjo tattooed umami cardigan.
                        </p>
                        <div>color<i class="bi bi-circle-fill text-light"></i>&nbsp;<i
                                class="bi bi-circle-fill text-dark"></i>&nbsp;<i
                                class="bi bi-circle-fill text-primary"></i>&nbsp;&nbsp;size
                            <select id="inputGroupSelect01" style="width: 10%;">
                                <option value="1">sm</option>
                                <option value="2">lg</option>
                                <option value="3">xl</option>
                            </select>
                        </div>
                        <hr class="w-100">
                        <div class="d-flex justify-content-between align-items-center w-100">
                            <p class="m-0">$58.00</p>
                            <div><button class="btn btn-primary me-3" style="width:100px;">button</button><i
                                    class="bi bi-heart-fill"></i></div>
                        </div>
                    </div>
                </div>
                <div class="row my-5">
                    <div class="col-12 col-lg-3 mb-3">
                        <img class="w-100 my-3" src="https://dummyimage.com/420x260/" alt="">
                        <p class="my-1">CATEGORY</p>
                        <p class="my-1">The Catalyzer</p>
                        <p class="my-1">$16.00</p>
                    </div>
                    <div class="col-12 col-lg-3 mb-3">
                        <img class="w-100 my-3" src="https://dummyimage.com/420x260/" alt="">
                        <p class="my-1">CATEGORY</p>
                        <p class="my-1">The Catalyzer</p>
                        <p class="my-1">$16.00</p>
                    </div>
                    <div class="col-12 col-lg-3 mb-3">
                        <img class="w-100 my-3" src="https://dummyimage.com/420x260/" alt="">
                        <p class="my-1">CATEGORY</p>
                        <p class="my-1">The Catalyzer</p>
                        <p class="my-1">$16.00</p>
                    </div>
                    <div class="col-12 col-lg-3 mb-3">
                        <img class="w-100 my-3" src="https://dummyimage.com/420x260/" alt="">
                        <p class="my-1">CATEGORY</p>
                        <p class="my-1">The Catalyzer</p>
                        <p class="my-1">$16.00</p>
                    </div>
                </div>
                <div class="row my-5">
                    <div class="col-12 col-lg-3 mb-3">
                        <img class="w-100 my-3" src="https://dummyimage.com/420x260/" alt="">
                        <p class="my-1">CATEGORY</p>
                        <p class="my-1">The Catalyzer</p>
                        <p class="my-1">$16.00</p>
                    </div>
                    <div class="col-12 col-lg-3 mb-3">
                        <img class="w-100 my-3" src="https://dummyimage.com/420x260/" alt="">
                        <p class="my-1">CATEGORY</p>
                        <p class="my-1">The Catalyzer</p>
                        <p class="my-1">$16.00</p>
                    </div>
                    <div class="col-12 col-lg-3 mb-3">
                        <img class="w-100 my-3" src="https://dummyimage.com/420x260/" alt="">
                        <p class="my-1">CATEGORY</p>
                        <p class="my-1">The Catalyzer</p>
                        <p class="my-1">$16.00</p>
                    </div>
                    <div class="col-12 col-lg-3 mb-3">
                        <img class="w-100 my-3" src="https://dummyimage.com/420x260/" alt="">
                        <p class="my-1">CATEGORY</p>
                        <p class="my-1">The Catalyzer</p>
                        <p class="my-1">$16.00</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="position-relative">
            <!-- Google Map -->
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14583.885357497871!2d120.67977946324464!3d23.961453605270986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1757505880156!5m2!1szh-TW!2stw"
                height="600" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" class="w-100">
            </iframe>
            <form class="position-absolute myformposition translate-middle bg-white p-3 rounded shadow"
                style="width:500px;">
                <p>Feedback</p>
                <p>Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Email:</label>
                    <input type="text" class="form-control" id="recipient-name">
                </div>
                <div class="mb-3">
                    <label for="message-text" class="col-form-label">Message:</label>
                    <textarea class="form-control" id="message-text"></textarea>
                </div>
                <button class="btn btn-primary w-100">button</button>
                <p>Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </form>
        </div>
    </main>
    <footer class="container-fluid" style="height: 20vh;">
        <div class="row" style="height: 80%;">
            <div class="col-12 col-sm-4  py-5">
                <div class="d-flex align-items-center justify-content-start ps-5">
                    <img src="../assets/img/A.jpg" alt="" class="mylogo rounded-circle me-2">
                    <h4 class="m-0">Pet</h4>
                </div>
                <p class="text-center fs-6">Center aligned text on all viewport sizes.</p>
            </div>
            <div class="col-8  text-black ">

                <div class="row lh-md py-3 mypadding-footer">
                    <div class="col-12 col-sm-3 text-center">
                        <h6 class="fw-bold">服務</h6>
                        <ul class="list-unstyled">
                            <li><a href="#" class="text-black text-decoration-none">狗狗</a></li>
                            <li><a href="#" class="text-black text-decoration-none">貓咪</a></li>
                            <li><a href="#" class="text-black text-decoration-none">小動物</a></li>
                            <li><a href="#" class="text-black text-decoration-none">魚類</a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-sm-3 text-center">
                        <h6 class="fw-bold">關於我們</h6>
                        <ul class="list-unstyled">
                            <li><a href="#" class="text-black text-decoration-none">品牌故事</a></li>
                            <li><a href="#" class="text-black text-decoration-none">最新消息</a></li>
                            <li><a href="#" class="text-black text-decoration-none">常見問題</a></li>
                            <li><a href="#" class="text-black text-decoration-none">聯絡我們</a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-sm-3 text-center">
                        <h6 class="fw-bold">會員專區</h6>
                        <ul class="list-unstyled">
                            <li><a href="#" class="text-black text-decoration-none">登入</a></li>
                            <li><a href="#" class="text-black text-decoration-none">註冊</a></li>
                            <li><a href="#" class="text-black text-decoration-none">購物車</a></li>
                            <li><a href="#" class="text-black text-decoration-none">訂單查詢</a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-sm-3 text-center">
                        <h6 class="fw-bold">追蹤我們</h6>
                        <ul class="list-unstyled">
                            <li><a href="#" class="text-black text-decoration-none">facebook</a></li>
                            <li><a href="#" class="text-black text-decoration-none">instagram</a></li>
                            <li><a href="#" class="text-black text-decoration-none">line</a></li>
                            <li><a href="#" class="text-black text-decoration-none">youtube</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between align-items-center ">
                <div>@ 2025 asana - @Pet</div>
                <div>
                    <ul class="list-inline m-0">
                        <li class="list-inline-item"><a href="#"><i class="bi bi-facebook fs-5 text-black"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="bi bi-instagram fs-5 text-black"></i></a>
                        </li>
                        <li class="list-inline-item"><a href="#"><i class="bi bi-line fs-5 text-black"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="bi bi-youtube fs-5 text-black"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped>
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* --- 解決兩個垂直滾動條的關鍵修正 --- */

/* 1. 確保 HTML 元素是唯一的滾動容器 */
html {
    /* 強制高度為自動，並允許滾動 */
    height: 100%;
    overflow-y: scroll;
}

/* 2. 移除 BODY 上的內部滾動條 */
body {
    /* 移除所有可能導致內部滾動條的 overflow 設定 */
    overflow: unset;
    overflow-y: unset;
    /* 確保 body 高度不會超出 html */
    height: auto;
    /* 有時候 margin 也會導致意外的空間 */
    margin: 0;
}

/* --- 解決兩個垂直滾動條的關鍵修正 (結束) --- */

main {
    /* 確保 main 元素不會自己產生滾動條 */
    overflow-y: visible !important;
}

.position-relative {
    overflow-x: hidden;
}

.mypadding-nav {
    padding-left: 250px;
    padding-right: 250px;
}

@media (max-width: 768px) {
    .mypadding-nav {
        padding-left: 50px;
        padding-right: 50px;
    }
}

@media (max-width: 768px) {
    .myrow {
        margin-left: -35px;
    }
}

@media (max-width: 768px) {
    .mypadding-text-1 {
        padding-left: 0;
        padding-right: 0;
    }
}

@media (max-width: 768px) {
    .mypadding-text-2 {
        padding-left: 10px !important;
    }
}

.myformposition {
    top: 50%;
    /* 修正：將 right: 0 改為計算父容器的邊界 */
    right: -10vw;
    /* 假設您想讓它超出視口 10% */
    transform: translateY(-50%);
    /* 移除 translateX(10%) */
}

@media (max-width: 768px) {
    .myformposition {
        top: 50%;
        left: 50%;
        /* 修正：使用 translate 居中，防止溢出 */
        transform: translate(-50%, -50%);
        width: 90% !important;
        /* 在小螢幕上限制寬度 */
    }
}

.mypadding-card {
    padding-left: 100px;
    padding-right: 100px;
}

@media (max-width: 576px) {
    .mypadding-footer {
        padding-left: 50%;
    }
}

.dropdown-toggle::after {
    display: none;
}

.myhr {
    color: blue;
    width: 30%;
    height: 30px;
}

.myborder {
    border-radius: 0px;
    border: none;
}

#myposition-dropdown {
    position: absolute;
    top: 100%;
    left: -100px;
}

@media (max-width: 768px) {
    #myposition-dropdown {
        position: absolute;
        top: 100%;
        left: -190px;
        width: 700%;
    }
}

.myafter {
    position: relative;
    display: inline-block;
    /* 讓 h4 只包文字 */
    padding-bottom: 8px;
    /* 預留空間給線條 */
}

.myafter::after {
    content: "";
    position: absolute;
    left: 50px;
    bottom: 40px;
    width: 10%;
    height: 3px;
    background-color: blue;
}

.mylogo {
    width: 40px;
    height: 40px;
}

li {
    list-style: none;
}

.mycircle {
    width: 100px;
    height: 100px;
}

.table tbody tr:last-child td,
.table tbody tr:last-child th {
    border-bottom: none;
}

th {
    font-weight: normal;
}

a {
    text-decoration: none;
}

/* swiper */
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #444;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after,
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
    font-size: 13px;
    color: white;
}

.swiper-pagination-bullet {
    border-radius: 0;
    width: 40px;
    height: 3px;
    background-color: white;
}

/* end */
</style>