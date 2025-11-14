<script>
export default {
    data() {
        return {
            // 提供完整的預期結構，防止模板報錯
            totals: { quantities: 0, total1: 0, total2: 0 }, 
            quantities: [
                // 至少包含預期的三個商品結構，防止 quantities[i] 報錯
                { quantity: 0, price: 0, name: '狗糧' },
                { quantity: 0, price: 0, name: '貓糧' },
                { quantity: 0, price: 0, name: '魚飼料' },
            ],
            contact:{
                name:'',phone:'',email:'',address:{
                    city:'',
                    addressnum:'', // 郵遞區號
                    address:'',
                }
            }
        }
    },
    mounted() {
        this.load(); 
    },
    methods: {
        load() {
            // 在 load 中呼叫所有三個數據載入
            this.loadData('totals', 'totals');
            this.loadData('quantities', 'quantities');
            this.loadData('contact', 'contact'); // 載入聯絡資訊
        },
        
        // 載入重用邏輯
        loadData(storageKey, componentProp) {
            const storedData = localStorage.getItem(storageKey);

            if (storedData) {
                try {
                    const parsedData = JSON.parse(storedData);
                    this[componentProp] = parsedData;

                    console.log(`✅ 成功從 localStorage 載入 ${storageKey}:`, parsedData);
                } catch (e) {
                    console.error(`❌ 解析 ${storageKey} 數據失敗:`, e);
                }
            } else {
                console.log(`ℹ️ localStorage 中沒有找到 ${storageKey} 數據。`);
            }
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
                        <a class="nav-link px-2" href="#"><i class="bi bi-cart-fill"></i></a>
                        <a class="nav-link px-2 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="bi bi-person-circle"></i>
                        </a>
                        <ul id="myposition-dorpdown" class="dropdown-menu container-fluid">
                            <li><a class="dropdown-item" href="#">Login</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
    <main class="bg-secondary container-fluid d-flex justify-content-center align-items-center">
        <div class="container-lg  bg-white mywidth" style="height:95%;">
            <section class="">
                <h1 class="fs-2 p-4">購物車</h1>
                <div class="d-flex justify-content-center align-items-center myrwd">
                    <div class="row container-fluid mx-5 myrwd" style="padding-left: 100px;">
                        <!-- Step 1 -->
                        <div class="col-3 text-center p-0">
                            <div class="d-flex align-items-center justify-content-center">
                                <div
                                    class="mycircle bg-success rounded-circle d-flex justify-content-center align-items-center">
                                    1
                                </div>
                                <div class="progress mx-2 flex-grow-1" style="height: 8px;">
                                    <div class="progress-bar bg-success opacity-50" style="width: 100%"></div>
                                </div>
                            </div>
                            <p class="pt-2 text-start" style="margin-left: -10px; ">確認購物車</p>
                        </div>
                        <!-- Step 2 -->
                        <div class="col-3 text-center p-0">
                            <div class="d-flex align-items-center justify-content-center">
                                <div
                                    class="mycircle bg-success rounded-circle d-flex justify-content-center align-items-center">
                                    2
                                </div>
                                <div class="progress mx-2 flex-grow-1" style="height: 8px;">
                                    <div class="progress-bar bg-success opacity-50" style="width: 100%"></div>
                                </div>
                            </div>
                            <p class=" pt-2 text-start" style="margin-left: -25px;">付款與運送方式</p>
                        </div>
                        <!-- Step 3 -->
                        <div class="col-3 text-center p-0">
                            <div class="d-flex align-items-center justify-content-center">
                                <div
                                    class="mycircle bg-success rounded-circle d-flex justify-content-center align-items-center">
                                    3
                                </div>
                                <div class="progress mx-2 flex-grow-1" style="height: 8px;">
                                    <div class="progress-bar bg-success opacity-50" style="width: 100%"></div>
                                </div>
                            </div>
                            <p class="pt-2 text-start" style="margin-left: -10px; ">填寫資料</p>
                        </div>
                        <!-- Step 4 -->
                        <div class="col-3 text-center p-0">
                            <div class="d-flex align-items-center justify-content-start">
                                <div
                                    class="mycircle bg-success rounded-circle d-flex justify-content-center align-items-center">
                                    4
                                </div>
                            </div>
                            <p class="pt-2 text-start" style="margin-left: -10px; ">完成訂購</p>
                        </div>
                    </div>
                </div>
            </section>
            <div class="px-4">
                <hr>
            </div>
            <section class="px-4">
                <h5 class="pb-2">訂單明細</h5>
                <div>
                    <div class="d-flex">
                        <img src="../assets/img/A.jpg" alt="" class="mylogo rounded-circle">
                        <div class="flex-column mx-2 my-1">
                            <h6 class="m-0">狗糧</h6>
                            <div class="myfont fw-light">#00001</div>
                        </div>
                        <div class="d-flex justify-content-center align-items-center ms-auto px-3">
                            <p class="m0">數量:{{ quantities[0].quantity }}*</p>
                            <p class="m-0">$100</p>
                        </div>
                    </div>
                    <hr>
                    <div class="d-flex">
                        <img src="../assets/img/A.jpg" alt="" class="mylogo rounded-circle">
                        <div class="flex-column mx-2 my-1">
                            <h6 class="m-0">貓糧</h6>
                            <div class="myfont fw-light">#00002</div>
                        </div>
                        <div class="d-flex justify-content-center align-items-center ms-auto px-3">
                            <p class="m0">數量:{{ quantities[1].quantity }}*</p>
                            <p class="m-0">$150</p>
                        </div>
                    </div>
                    <hr>
                    <div class="d-flex">
                        <img src="../assets/img/A.jpg" alt="" class="mylogo rounded-circle">
                        <div class="flex-column mx-2 my-1">
                            <h6 class="m-0">魚飼料</h6>
                            <div class="myfont fw-light">#00003</div>
                        </div>
                        <div class="d-flex justify-content-center align-items-center ms-auto px-3">
                            <p class="m0">數量:{{ quantities[2].quantity }}*</p>
                            <p class="m-0">$50</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="px-4">
                <h5 class="py-2">寄送資料</h5>
                <p class="py-2">姓名&nbsp;&nbsp;{{contact.name}}</p>
                <p class="py-2">電話&nbsp;&nbsp;{{contact.phone}}</p>
                <p class="py-2">Email&nbsp;&nbsp;{{contact.email}}</p>
                <p class="py-2">地址&nbsp;&nbsp;{{ contact.address.addressnum }}&nbsp;{{ contact.address.city }}{{ contact.address.address }}</p>
        <hr>
            </section>
            <section class="px-4 d-flex flex-column justify-content-end align-items-end">
                <div class="d-block flex-column ">
                    <div class="d-flex justify-content-between ">
                        <p class="mx-5 my-0 opacity-50 myrwd-text">數量:</p>
                        <p class="ms-5 my-0 myrwd-text">{{totals.quantities}}</p>
                    </div>
                    <div class="d-flex justify-content-between ">
                        <p class="mx-5 my-0 opacity-50 myrwd-text">小<span class="d-none d-md-inline">計</span><span
                                class="d-inline d-md-none"><br>計</span>:</p>

                        <p class="ms-5 my-0  myrwd-text myrwd-text-2">${{totals.total1}}</p>
                    </div>
                    <div class="d-flex justify-content-between ">
                        <p class="mx-5 my-0 opacity-50 myrwd-text">運<span class="d-none d-md-inline">費</span><span
                                class="d-inline d-md-none"><br>費</span>:</p>

                        <p class="ms-5 my-0  myrwd-text myrwd-text-2">$60</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p class="mx-5 my-0 opacity-50 myrwd-text">總<span class="d-none d-md-inline">計</span><span
                                class="d-inline d-md-none"><br>計</span>:</p>
                        <p class="ms-5 my-0 myrwd-text myrwd-text-2 ">${{totals.total2}}</p>
                    </div>
                </div>
            </section>
            <div class="px-4">
                <hr>
            </div>
            <section class=" d-flex justify-content-between align-items-center px-4 pt-2">
                <RouterLink class="btn btn-primary" to="/shoppcar3" role="button">上一步</RouterLink>

                <RouterLink class="btn btn-primary" to="/" role="button">返回首頁</RouterLink>
            </section>
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

                <div class="row lh-lg py-3 mypadding-footer">
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
.m0{
    margin: 0;
}
.mypadding-nav {
    padding-left: 50px;
    padding-right: 50px;
}

@media (max-width: 768px) {
    .mypadding-nav {
        padding-left: 0;
        padding-right: 0;
    }
}

@media (max-width: 576px) {
    .mypadding-footer {
        padding-left: 50%;
    }
}

.dropdown-toggle::after {
    display: none;
}

main {
    height: 1100px;
}

@media (min-width: 1300px) {
    .mywidth {
        width: 50% !important;
    }
}

#myposition-dorpdown {
    position: absolute;
    top: 100%;
    left: -100px;
}

@media (max-width: 768px) {
    #myposition-dorpdown {
        position: absolute;
        top: 100%;
        left: -190px;
        width: 700%;
    }
}

.mylogo {
    width: 40px;
    height: 40px;
}

li {
    list-style: none;
}

.myfont {
    font-size: 12px;
}

.mynumber {
    width: 40px;
    height: 30px;
}

.mycircle {
    width: 40px;
    height: 40px;
}

@media (max-width: 768px) {
    .myrwd {
        margin-right: 0 !important;
        padding-left: 0 !important;
        padding-right: 0;
    }
}

@media (max-width: 768px) {
    .myrwd-text {
        margin-right: 10px !important;
        margin-left: 0 !important;
    }

    .myrwd-text-2 {
        margin-top: 20px !important;
    }
}
</style>
