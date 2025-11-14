<script>
export default {
    data() {
        return {
            totals: {}
        }
    },
    mounted() {
        this.load()
    },
    methods: {
        load() {
            // 1. 嘗試從 localStorage 讀取數據
            const storedTotals = localStorage.getItem('totals');

            // 2. 檢查是否有存儲的數據
            if (storedTotals) {
                try {
                    // 3. 將 JSON 字串解析（反序列化）回 JavaScript 物件
                    const parsedTotals = JSON.parse(storedTotals);

                    // 4. 將解析後的數據設置給 this.totals
                    this.totals = parsedTotals;

                    console.log('✅ 成功從 localStorage 載入 totals:', this.totals);
                } catch (e) {
                    // 處理解析失敗的情況（例如數據被手動修改過）
                    console.error('❌ 解析 totals 數據失敗:', e);
                }
            } else {
                console.log('ℹ️ localStorage 中沒有找到 totals 數據。');
            }
        },
    }}
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
                                    <div class="progress-bar bg-success opacity-50" style="width: 25%"></div>
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
                                    <div class="progress-bar bg-success opacity-50" style="width: 0%"></div>
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
                <h5 class="pb-2">付款方式</h5>
                <div>
                    <div class="form-check pb-1">
                        <input class="form-check-input" type="radio" name="radioDefault-1" id="radioDefault1">
                        <label class="form-check-label" for="radioDefault1">
                            信用卡付款
                        </label>
                    </div>
                    <hr>
                    <div class="form-check pb-1">
                        <input class="form-check-input" type="radio" name="radioDefault-1" id="radioDefault2" checked>
                        <label class="form-check-label" for="radioDefault2">
                            網路 ATM
                        </label>
                    </div>
                    <hr>
                    <div class="form-check pb-1">
                        <input class="form-check-input" type="radio" name="radioDefault-1" id="radioDefault3" checked>
                        <label class="form-check-label" for="radioDefault3">
                            超商代碼
                        </label>
                    </div>
                    <hr>
                </div>
            </section>
            <section class="px-4">
                <h5 class="pb-2">運送方式</h5>
                <div>
                    <div class="form-check pb-1">
                        <input class="form-check-input" type="radio" name="radioDefault-2" id="radioDefault4">
                        <label class="form-check-label" for="radioDefault4">
                            黑貓宅配
                        </label>
                    </div>
                    <hr>
                    <div class="form-check pb-1">
                        <input class="form-check-input" type="radio" name="radioDefault-2" id="radioDefault5" checked>
                        <label class="form-check-label" for="radioDefault5">
                            超商店到店
                        </label>
                    </div>
                    <hr>
                </div>
            </section>
            <section class="px-4 d-flex flex-column justify-content-end align-items-end">
                <div class="d-block flex-column ">
                    <div class="d-flex justify-content-between ">
                        <p class="mx-5 my-0 opacity-50 myrwd-text">數量:</p>
                        <p class="ms-5 my-0 myrwd-text">{{ totals.quantities }}</p>
                    </div>
                    <div class="d-flex justify-content-between ">
                        <p class="mx-5 my-0 opacity-50 myrwd-text">小<span class="d-none d-md-inline">計</span><span
                                class="d-inline d-md-none"><br>計</span>:</p>

                        <p class="ms-5 my-0  myrwd-text myrwd-text-2">${{ totals.total1 }}</p>
                    </div>
                    <div class="d-flex justify-content-between ">
                        <p class="mx-5 my-0 opacity-50 myrwd-text">運<span class="d-none d-md-inline">費</span><span
                                class="d-inline d-md-none"><br>費</span>:</p>

                        <p class="ms-5 my-0  myrwd-text myrwd-text-2">$60</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p class="mx-5 my-0 opacity-50 myrwd-text">總<span class="d-none d-md-inline">計</span><span
                                class="d-inline d-md-none"><br>計</span>:</p>
                        <p class="ms-5 my-0 myrwd-text myrwd-text-2 ">${{ totals.total2 }}</p>
                    </div>
                </div>
            </section>
            <div class="px-4">
                <hr>
            </div>
            <section class=" d-flex justify-content-between align-items-center px-4 pt-2">
                <RouterLink class="btn btn-primary" to="/shoppcar1" role="button">上一步</RouterLink>

                <RouterLink class="btn btn-primary" to="/shoppcar3" role="button">下一步</RouterLink>
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
    height: 1000px;
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
