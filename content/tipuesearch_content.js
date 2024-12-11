var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: https://github.com/mdecp2024/41323216 \n 個人網站: https://mdecp2024.github.io/hw-ffwfggw/ \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w10', 'text': "第一題 \n 操作概要： 這部影片中使用了五種不同的方式去執行金字塔程式，模擬了在不同環境下去執行的方式與輸出的結果 心得： 在過程中我發現執行一個程式不是只有一種方法，各種模式有不同的優缺點，但是在用jupyter的過程我發現會報錯，應該是解壓縮不完全回去再試試看 \n \n \n 第二題 \n １. 只能包含字母、數字和底線 _ ：變數名稱只能包含 a-z 、 A-Z 、 0-9 和 _ ，不能包含空格或其他符號。 \n \xa0 \xa0 大小寫敏感 ：Python是大小寫敏感的語言， myVariable 並且 myvariable 是兩個不同的變數名稱。 \n \xa0 \xa0\xa0 不得以數字開頭 ：變數中後可有數字，但不得做為開頭。 \n \n 2.避免 使用Python關鍵字 if ：關鍵字（keywords）是Python語言保留的單詞，具有特殊意義，不能作為變數名稱。 \n \n 第三題 \n \n \n 以下方程式列印採用  Mathjax Version 3 格式 . \n \n set1 - Physics \n Use python to solve the problem: A jet touches down at velocity 310 km/h. Find the constant acceleration required to stop the aircraft 1000 m down the runway. \n To solve this problem, we'll use the kinematic equations of motion under constant acceleration. The question asks for the constant acceleration required to stop the jet after a certain distance, which means we are looking for the deceleration. \n Step 1: Problem Breakdown \n We are given: - Initial velocity \\( v_0 = 310 \\, \\text{km/h} \\) - Final velocity \\( v = 0 \\, \\text{m/s} \\) (since the jet stops) - Distance \\( d = 1000 \\, \\text{m} \\) \n We are asked to find the constant acceleration \\( a \\) that brings the jet to a stop. \n Step 2: Kinematic Equation \n The appropriate kinematic equation for this problem, where the object is decelerating (i.e., stopping), is: \n \\[ v^2 = v_0^2 + 2ad \\] \n Where: - \\( v \\) is the final velocity (which is 0 since the jet stops), - \\( v_0 \\) is the initial velocity, - \\( a \\) is the constant acceleration (which we need to solve for), - \\( d \\) is the distance traveled. \n Step 3: Solving for Acceleration \\( a \\) \n Rearranging the equation to solve for \\( a \\): \n \\[ a = \\frac{v^2 - v_0^2}{2d} \\] \n Since \\( v = 0 \\), this simplifies to: \n \\[ a = \\frac{-v_0^2}{2d} \\] \n Step 4: Converting Units \n The velocity \\( v_0 = 310 \\, \\text{km/h} \\) needs to be converted to meters per second (m/s) because the distance is in meters and we want the acceleration in meters per second squared (m/s²). \n \\[ v_0 = 310 \\, \\text{km/h} = \\frac{310 \\times 1000}{3600} \\, \\text{m/s} = 86.11 \\, \\text{m/s} \\] \n Step 5: Substituting Known Values \n Now we can substitute the values into the equation: \n \\[ a = \\frac{-(86.11)^2}{2 \\times 1000} \\] \n Let's calculate this using Python. \n Python Code Implementation:  problem-set1-1.py \n \n Use function to solve this kind of problem.  problem-set1-2.py \n Extend to be more general to solve all kind of these problems.  problem-set1-3.py \n set2- Calculus \n Under ideal conditions a certain bacteria population is known to double every three hours. Suppose that there are initially 100 bacteria. When will the population first reach 50,000 ? \n We are asked to determine when a bacteria population, starting at 100 bacteria, will first reach 50,000, given that the population doubles every 3 hours. \n Exponential Growth Equation: \n The population growth can be modeled by the exponential growth formula: \n \\[ P(t) = P_0 \\times 2^{\\frac{t}{T}} \\] \n Where: - \\( P(t) \\) is the population at time \\( t \\), - \\( P_0 \\) is the initial population, - \\( T \\) is the doubling time (in hours), - \\( t \\) is the time elapsed (in hours). \n Given: - \\( P_0 = 100 \\) (initial population), - \\( T = 3 \\) hours (doubling time), - \\( P(t) = 50,000 \\) (target population). \n Step 1: Plugging in the known values \n We want to find the time \\( t \\) when the population reaches 50,000. Substituting the known values into the growth equation: \n \\[ 50,000 = 100 \\times 2^{\\frac{t}{3}} \\] \n Step 2: Simplifying the equation \n First, divide both sides by 100 to isolate the exponential term: \n \\[ 500 = 2^{\\frac{t}{3}} \\] \n Step 3: Solving for \\( t \\) \n To solve for \\( t \\), take the logarithm (base 2) of both sides of the equation: \n \\[ \\log_2(500) = \\frac{t}{3} \\] \n Now, multiply both sides by 3 to solve for \\( t \\): \n \\[ t = 3 \\times \\log_2(500) \\] \n Step 4: Change of Base Formula \n To compute \\( \\log_2(500) \\) in Python or any other programming language, we can use the change of base formula: \n \\[ \\log_2(x) = \\frac{\\log_{10}(x)}{\\log_{10}(2)} \\] \n Thus, the equation for \\( t \\) becomes: \n \\[ t = 3 \\times \\frac{\\log_{10}(500)}{\\log_{10}(2)} \\] \n Python Code to Calculate \\( t \\):  problem-set2-1.py \n \n \n", 'tags': '', 'url': 'w10.html'}, {'title': 'w4', 'text': 'from coppeliasim_zmqremoteapi_client import RemoteAPIClient\nimport time\nimport keyboard\n\n# 利用 zmqRemoteAPI 以 23000 對場景伺服器進行連線\nclient = RemoteAPIClient(\'[::1]\', 23000)\n# 以 getObject 方法取得場景物件\nsim = client.getObject(\'sim\')\nbox = sim.getObject(\'/box\')\n\n# 啟動模擬\nsim.startSimulation()\n\n# 設定立方體的尺寸和初始位置\ncube_size = 0.2  # 20 cm\nspacing = 0.5  # 50 cm 之間的距離（可根據需求調整）\n\n# 擺放立方體的行數和每行的數量\nrows = 5  # 從第 1 行到第 5 行\ncubes_in_row = [1, 3, 5, 7, 9]  # 每行立方體的數量\n\n# 在正的 Y 方向擺放立方體\nfor row in range(rows):\n    # 計算每行的起始 x 位置，讓其對稱\n    start_row_x = - (cubes_in_row[row] - 1) * spacing / 2\n    \n    for col in range(cubes_in_row[row]):\n        # 計算每個立方體的位置\n        x_position = start_row_x + col * spacing\n        y_position = row * spacing  # 垂直方向上每行間距\n        \n        # 建立立方體\n        cube_handle = sim.createPrimitiveShape(sim.primitiveshape_cuboid, [cube_size, cube_size, cube_size], 0)\n        sim.setObjectPosition(cube_handle, -1, [x_position, y_position, cube_size / 2])  # z 方向上升到立方體的中心\n\n# 在負的 Y 方向擺放立方體\nfor row in range(rows):\n    # 計算每行的起始 x 位置，讓其對稱\n    start_row_x = - (cubes_in_row[row] - 1) * spacing / 2\n    \n    for col in range(cubes_in_row[row]):\n        # 計算每個立方體的位置\n        x_position = start_row_x + col * spacing\n        y_position = -row * spacing  # 負的 Y 方向\n        \n        # 建立立方體\n        cube_handle = sim.createPrimitiveShape(sim.primitiveshape_cuboid, [cube_size, cube_size, cube_size], 0)\n        sim.setObjectPosition(cube_handle, -1, [x_position, y_position, cube_size / 2])  # z 方向上升到立方體的中心\n\n# 完成立方體的擺放\nprint("立方體已成功擺放!")\n\n# 設定主迴圈\nwhile True:\n    # 在這裡可以進行其他模擬操作\n    time.sleep(0.1)  # 確保循環不會過快\n\n    if keyboard.is_pressed(\'q\'):\n        # 可以按下 q 鍵跳出重複執行迴圈\n        break\n\n# 終止模擬\nsim.stopSimulation()\n \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': '\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 德謨克里特在過去曾經講過，連一個高尚朋友都沒有的人，是不值得活的。這句話讓我們得到了一個全新的觀點去思考這個問題。看看別人，再想想自己，會發現問題的核心其實就在你身旁。我們不妨可以這樣來想: 福樓拜在過去曾經講過，人的一生中，最光輝的一天並非是功成名就那天，而是從悲嘆與絕望中產生對人生的挑戰，以勇敢邁向意志那天。這句話看似簡單，卻埋藏了深遠的意義。謹慎地來說，我們必須考慮到所有可能。學習程式python心得，到底應該如何實現。 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': "def print_pyramid(n):\n    for i in range(n):\n        # 打印空格\n        print(' ' * (n - i - 1), end='')\n        # 打印星号\n        print('*' * (2 * i + 1))\n\n# 设置金字塔高度\nheight = 5\nprint_pyramid(height)\ndef print_pyramid(n):\n    for i in range(n):\n        # 打印空格\n        for j in range(n - i - 1):\n            print(' ', end='')\n        # 打印星号\n        for j in range(2 * i + 1):\n            print('*', end='')\n        print()  # 换行 \n   *\n   ***\n  *****\n *******\n*********\n    *\n   ***\n  *****\n *******\n*********\n*****\n*****\n*****\n*****\n***** \n \n \n \n", 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '利用python寫程式 \n \n \n \n 如何做bython \n \n \n \n 如何上傳影片 \n \n \n \n \xa0 \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w11_hw', 'text': '1.\xa0 已知可以用 Python 程式 由上往下列印三角形 * , 或 由左往右列印三角形 * , 請將此程式延伸到可以在 10x10 的字元區域中, 以 "*" 字元列印出圓型區域. 完成後請將程式碼存入個人 Gist 後, 直接在個人作業網站中的 Brython 頁面中執行. (提示: ?src=gist_script_URL) \n 解:\xa0 "*" 字元 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n \n \n \n n  =   10 \xa0  # 定義區域大小為 10x10 \n center  =   ( 5 ,  5 )\xa0  # 圓心位置 \n radius  =   4 \xa0  # 半徑 \n \xa0 \n # 遍歷 10x10 的每一個位置 \n for   y  in   range (n): \n \xa0\xa0\xa0\xa0 for   x  in   range (n): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # 計算 (x, y) 距離圓心 (5, 5) 的距離 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 distance  =   ((x  -   center[ 0 ]) * * 2   +   (y  -   center[ 1 ]) * * 2 ) * * 0.5 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # 若距離小於等於半徑，則顯示 * \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   distance < =   radius: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print ( \'*\' , end = \'\') \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 else : \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print ( \' \' , end = \'\') \n \xa0\xa0\xa0\xa0 # 換行，開始新的一行 \n \xa0\xa0\xa0\xa0 print () \n \n \n \n \n \n \n \n \n 2. 已知可以在網頁中利用 Brython 繪製方格與塗色, 如下連結, 請設法修改此一程式, 直接將程式存入個人的 Gist, 並利用黑色方塊圍出一個圓形區域. \n 網頁上的方格與塗色 \n 解: 請設法修改此一程式 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n \n \n \n from   browser  import   html \n from   browser  import   document as doc \n \xa0 \n # 利用 HTML 建立畫布超文件物件 \n canvas  =   html.CANVAS(width = 400 , height = 400 ) \n brython_div  =   doc[ "brython_div1" ] \n brython_div < =   canvas \n \xa0 \n # 每格的像素數 \n gs  =   20 \xa0  # 每個格子的大小 \n \xa0 \n # 取得畫布的 2D 繪圖上下文 \n ctx  =   canvas.getContext( "2d" ) \n \xa0 \n # 繪製矩形的函數 \n def   dRect(lux, luy, w, h, s = 1 , c = \'#ff0000\' ): \n \xa0\xa0\xa0\xa0 ctx.lineWidth  =   s \n \xa0\xa0\xa0\xa0 ctx.strokeStyle  =   c \n \xa0\xa0\xa0\xa0 ctx.beginPath() \n \xa0\xa0\xa0\xa0 ctx.rect(lux, luy, w, h) \n \xa0\xa0\xa0\xa0 ctx.stroke() \n \xa0 \n # 繪製 10x10 的格子 \n def   grid(width, height, grid_pix): \n \xa0\xa0\xa0\xa0 for   i  in   range (width): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 for   j  in   range (height): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 dRect(i  *   grid_pix, j  *   grid_pix, grid_pix, grid_pix,  1 ,  "lightgrey" ) \n \xa0 \n # 填充格子的函數 \n def   fill(x, y, color): \n \xa0\xa0\xa0\xa0 ctx.fillStyle  =   color \n \xa0\xa0\xa0\xa0 ctx.fillRect(x  -   1 , y  -   1 , gs, gs) \n \xa0 \n # 在方格內繪製圓形 \n def   draw_circle(center_x, center_y, radius, color): \n \xa0\xa0\xa0\xa0 # 計算圓心的座標在畫布上的位置 (需要考慮格子的大小) \n \xa0\xa0\xa0\xa0 cx  =   center_x  *   gs  +   gs  /   2 \n \xa0\xa0\xa0\xa0 cy  =   center_y  *   gs  +   gs  /   2 \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 ctx.fillStyle  =   color \n \xa0\xa0\xa0\xa0 ctx.beginPath() \n \xa0\xa0\xa0\xa0 ctx.arc(cx, cy, radius  *   gs,  0 ,  2   *   3.14159 )\xa0  # 設定圓心座標與半徑 \n \xa0\xa0\xa0\xa0 ctx.fill() \n \xa0 \n # 繪製 10x10 的格子 \n grid( 10 ,  10 , gs) \n \xa0 \n # 繪製圓形，圓心在 (5,5)，半徑為 3 \n draw_circle( 5 ,  5 ,  3 ,  "black" ) \n \n \n \n \n \n \n \n \xa0 \n 3. 完成上列題目後, 請利用 Youtube 影片 簡報 個人的解題過程與心得. \n \n \n 11/27 \xa0 程式 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n \n \n \n n = 11   #總共行數 \n space  =   \'_\' \n center  =   n / / 2 \n #print(center) \n \xa0 \n for   y  in   range (n): \n \xa0\xa0\xa0\xa0 for   x  in   range (n): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print ( "(" ,x, "," ,y, ")" ,sep = "") \n \n \n \n \n \n \n \n \xa0 \xa0 \xa0 \xa0程式2 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n \n \n \n from   browser  import   html \n from   browser  import   document as doc \n \xa0 \n # 利用 html 建立 canvas 超文件物件 \n canvas  =   html.CANVAS(width  =   400 ,height  =   400 ) \n brython_div  =   doc[ "brython_div1" ] \n brython_div < =   canvas \n \xa0 \n # 每一格的 pixel 數 \n gs  =   20 \n \xa0 \n # gs*tc = canvas width and height \n \xa0 \n ctx  =   canvas.getContext( "2d" ) \n \xa0 \n width = 11 \n height = 11 \n \xa0 \n """ \n ctx.lineWidth = 1 \n ctx.strokeStyle = \'lightgrey\' \n ctx.beginPath() \n #ctx.rect(i*gs, j*gs, gs, gs) \n ctx.rect(0, 0, 150, 100) \n ctx.stroke() \n """ \n for   i  in   range (width):  \n \xa0\xa0\xa0\xa0 for   j  in   range (height): \n \xa0\xa0\xa0\xa0\xa0 #dRect(i*gs, j*gs, gs, gs, 1, "lightgrey") \n \xa0\xa0\xa0\xa0\xa0 ctx.lineWidth = 1 \n \xa0\xa0\xa0\xa0\xa0 ctx.strokeStyle = \'lightgrey\' \n \xa0\xa0\xa0\xa0\xa0 ctx.beginPath(); \n \xa0\xa0\xa0\xa0\xa0 ctx.rect(i * gs,j * gs,gs,gs) \n \xa0\xa0\xa0\xa0\xa0 ctx.stroke(); \n \n \n \n \n \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12_hw', 'text': '第一題\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \n 1-1 解\xa0 \xa0 \n input("你叫啥") \n 1-2 解 \xa0  \n \n \n \n print ("   /\\_/\\   ")\nprint (" >^.^<   ")\nprint ("    / \\    ")\nprint ("   (___)___")\n \n \n \n \xa0\xa0 \n 第二題\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n 解 \n first_name = "chou" #變數first_name為"自己的姓"\nlast_name  = "ryan" #變數last_name為"自己的名"\nprint (first_name) #列印變數first_name\nprint (last_name) #列印變數last_name \n 第三題 \n 解 \n programming_books = ["Learn python", "Python for all",  "Intro to python"] #在programming_books變數裡面有3個字串\nprint (programming_books) #列印programming_books變數(會出現三個字串)\nwanted_book = input("Hi! What book would you like to buy?") #設定一個變數為wanted_book其等於input指令回傳之數值\nprint (wanted_book) #列印wanted_book變數\nif wanted_book in programming_books: #如果 "變數wanted_book"回傳之值 在"programming_books"字串當中\n    print ("Yes, we sell it!")       #列印 是的我們有販賣\nelse:                            #反之   \n    print ("Sorry, we don\'t sell that book") #列印 抱歉我們沒有販賣 \n \n 第四題 \n 解 \n shopping_list = ["carrots", "chocolate", "olives"] #在shopping_list變數裡面有3個字串\nprint (shopping_list) #列印shopping_list變數\nnew_item = input("What else do I have to buy?") #設定一個變數為new_item其等於input指令回傳之數值\n \nif new_item in shopping_list:  #如果 "變數new_item(想買的物品)"回傳之值 在"shopping_list(購物清單)"字串當中就執行以下程式\n    print (new_item + " is/are already in the shopping list") #列印 "new_item變數的數值"+字串is/are already in the shopping list\n    print (shopping_list) #列印shopping_list字串\nelse:                    #反之\n    shopping_list.append(new_item) #購物清單.加入(想要購買的物品)    如果不在購物清單內那就將未在字串中物品加入購物清單\n    print (shopping_list) #列印購物清單\n#以下是移除物品的程式\nitem_to_remove = input("What do I have to remove?") #item_to_remove(想要移除的物品)\n \nif item_to_remove in shopping_list: #如果 想要移除的物品在購物清單中 那就執行\n    shopping_list.remove(item_to_remove) #把購物清單.移除(想要移除的物品)\n    print (shopping_list) #列印購物清單\nelse:                     #反之\n    print (item_to_remove + " is/are not in the list") #列印 想要移除的物品+is/are not in the list(不在清單中)\n    print (shopping_list) #列印購物清單 \n 第五題 \n 解 \n todays_menu = ["burger", "salad", "coke"] #todays_menu變數=今天菜單["burger", "salad", "coke"\nside_dish_index = todays_menu.index("salad") #side_dish_index變數 = 今日菜單.找出"沙拉"位於字串中第幾個\nprint (side_dish_index) #列印side_dish_index  列印他在第幾位\ntodays_menu.pop(side_dish_index) #今日菜單.移除字串中的元素(side_dish_index變數"沙拉")  這裡意思是移除沙拉\nprint (todays_menu) #列印今日菜單\ntodays_menu.insert(side_dish_index, "fries") #今日菜單.在字串中插入(side_dish_index, "fries")   這裡意思是加入薯條\nprint (todays_menu) #列印今日菜單 \n \n print() \xa0 是 Python 的內建函數，用於將指定的內容輸出到控制台（標準輸出設備）。 \n 它可以輸出各種類型的數據，包括字串、數字、列表、字典等。 \n 詳細資料: https://realnewbie.com/coding/python/python-print/#ftoc-heading-2  \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13', 'text': '上課題目 \n from browser import html #導入html函式庫\nfrom browser import document as doc #導入document程式庫並在程式中命名(簡寫)為doc\n\n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width = 400,height = 400) #將變數canvas指定為html.CANVAS(width = 400,height = 400) \n#意思是建立*(準備)一個400*400的空間(畫布)\nbrython_div = doc["brython_div1"] #將變數brython_div指定為doc["brython_div1"]\nbrython_div <= canvas #將canve指定為子元素加入倒brython_div中\n\n# 每一格的 pixel 數\ngs = 200 \n\n# gs*tc = canvas width and height\n\nctx = canvas.getContext("2d") #將ctx指定(簡寫)為canvas.getContext("2d") (獲取畫布（canvas）的 2D 繪圖上下文 (context))\nwidth=1 #方形的寬\nheight=1 #方形的高\n\n#第一個方形\nfor i in range(width): \n    for j in range(height):\n     #dRect(i*gs, j*gs, gs, gs, 1, "lightgrey")\n     ctx.lineWidth=1\n     ctx.strokeStyle=\'red\'\n     ctx.beginPath();\n     ctx.rect(i*gs,j*gs,gs,gs)\n     ctx.stroke();\n     \n#第二個偏移的方形\nfor i in range(width): \n    for j in range(height):\n     #dRect(i*gs, j*gs, gs, gs, 1, "lightgrey")\n     ctx.lineWidth=1\n     ctx.strokeStyle=\'red\'\n     ctx.beginPath();\n     ctx.rect(i*gs+100,j*gs+100,gs,gs)      #gs+100代表往右下偏移100像素\n     ctx.stroke();\n \n w13 作業: \n 請在下列圖形中的兩個正方形外圍, 以黑色畫筆畫圓, 並設法在各線條所圍成的封閉區域塗上不同顏色. 操作過程請拍攝影片, 並在頁面中列出作業心得. \n 解 \n from browser import html\nfrom browser import document as doc\n\n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width=400, height=400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\nctx = canvas.getContext("2d")\nctx.lineWidth = 1  # 設定邊框線寬\n\n# 繪製對角線，顏色設定為藍色\nctx.strokeStyle = \'blue\'  # 設定對角線顏色為藍色\nctx.beginPath()\nctx.moveTo(20, 20)  # 調整起點位置\nctx.lineTo(100, 100)  # 終點設為大正方形的右下角\nctx.stroke()\n\n# 繪製外接圓，圓心位於第一個矩形的中央\ncenter_x1 = 20 + 80 / 2  # 第一個矩形的X中心\ncenter_y1 = 20 + 80 / 2  # 第一個矩形的Y中心\n\n# 半徑為第一個矩形對角線的一半\nradius1 = (80 * (2 ** 0.5)) / 2\n\n# 繪製外接圓\nctx.strokeStyle = \'green\'  # 設定圓的顏色為綠色\nctx.beginPath()\nctx.arc(center_x1, center_y1, radius1, 0, 2 * 3.14159)  # 圓心 (center_x1, center_y1) 和半徑\nctx.stroke()\n\n# 繪製外接圓，圓心位於第二個矩形的中央\ncenter_x2 = 60 + 80 / 2  # 第二個矩形的X中心\ncenter_y2 = 60 + 80 / 2  # 第二個矩形的Y中心\n\n# 半徑為第二個矩形對角線的一半\nradius2 = (80 * (2 ** 0.5)) / 2\n\n# 繪製外接圓\nctx.strokeStyle = \'purple\'  # 設定圓的顏色為紫色\nctx.beginPath()\nctx.arc(center_x2, center_y2, radius2, 0, 2 * 3.14159)  # 圓心 (center_x2, center_y2) 和半徑\nctx.stroke()\n\n# 繪製第一個矩形，並填充顏色\nctx.fillStyle = \'yellow\'  # 設定填充顏色為黃色\nctx.strokeStyle = \'red\'   # 設定邊框顏色為紅色\n\nctx.rect(20, 20, 80, 80)  # 設定矩形的位置和大小，縮小為 80x80\nctx.stroke()  # 繪製邊框\nctx.beginPath()\n\n# 繪製第二個矩形\nctx.strokeStyle = \'red\'    # 設定邊框顏色為紅色\nctx.beginPath()\nctx.rect(60, 60, 80, 80)  # 設定第二個矩形的位置和大小，縮小為 60x60\nctx.stroke()  # 繪製邊框\n\n# 填充圓形的區域，排除與正方形的重疊部分\nctx.globalCompositeOperation = \'source-over\'  # 設定為填充模式\nctx.fillStyle = \'lightblue\'  # 設定圓形內部填充顏色為淺藍色\n\n# 填充第一個圓形\nctx.beginPath()\nctx.arc(center_x1, center_y1, radius1, 0, 2 * 3.14159)\nctx.fill()\n\n# 填充第二個圓形\nctx.beginPath()\nctx.arc(center_x2, center_y2, radius2, 0, 2 * 3.14159)\nctx.fill()\n\n# 刪除圓形與正方形重疊的區域\nctx.globalCompositeOperation = \'destination-out\'  # 設定為刪除重疊區域模式\n\n# 刪除第一個圓與正方形重疊的區域\nctx.beginPath()\nctx.rect(20, 20, 80, 80)  # 第一個矩形區域\nctx.fill()\n\n# 刪除第二個圓與正方形重疊的區域\nctx.beginPath()\nctx.rect(60, 60, 80, 80)  # 第二個矩形區域\nctx.fill()\n\n# 填充重疊區域的顏色（位於兩個正方形重疊的區域）\nctx.globalCompositeOperation = \'source-over\'  # 恢復填充模式\nctx.fillStyle = \'orange\'  # 設定重疊區域填充顏色為橙色\n\n# 填充第一個矩形的內部\nctx.globalCompositeOperation = \'source-over\'  # 設定為填充模式\nctx.fillStyle = \'lightyellow\'  # 設定填充顏色\nctx.beginPath()\nctx.rect(20, 20, 80, 80)  # 第一個矩形區域\nctx.fill()\n\n# 填充第二個矩形的內部\nctx.fillStyle = \'orange\'  # 設定填充顏色\nctx.beginPath()\nctx.rect(60, 60, 80, 80)  # 第二個矩形區域\nctx.fill()\n\n# 填充第一個圓形和矩形之間的空白區域\nctx.fillStyle = \'lightblue\'  # 設定填充顏色\nctx.beginPath()\nctx.arc(center_x1, center_y1, radius1, 0, 2 * 3.14159)\nctx.rect(20, 20, 80, 80)  # 使用複合模式\nctx.globalCompositeOperation = \'destination-over\'  # 填充背景模式\nctx.fill()\n\n# 填充第二個圓形和矩形之間的空白區域\nctx.fillStyle = \'pink\'  # 設定填充顏色\nctx.beginPath()\nctx.arc(center_x2, center_y2, radius2, 0, 2 * 3.14159)\nctx.rect(60, 60, 80, 80)  # 使用複合模式\nctx.globalCompositeOperation = \'destination-over\'\nctx.fill()\n\n# 重置繪圖操作模式\nctx.globalCompositeOperation = \'source-over\'\n\n# 重疊區域填充\nctx.beginPath()\nctx.rect(60, 60, 40, 40)  # 重疊區域的範圍 (兩個矩形重疊部分)\nctx.fill()\n\n# 重新繪製斜線，確保它在最上層\nctx.strokeStyle = \'blue\'  # 設定斜線顏色為藍色\nctx.beginPath()\nctx.moveTo(20, 20)\nctx.lineTo(100, 100)  # 斜線終點設為大正方形的右下角\nctx.stroke()\n\n# 最後繪製所有的邊框，確保線條不被遮蓋\nctx.strokeStyle = \'red\'   # 第一個矩形的邊框顏色\nctx.beginPath()\nctx.rect(20, 20, 80, 80)  # 第一個矩形的位置和大小\nctx.stroke()\n\nctx.strokeStyle = \'red\'  # 第二個矩形的邊框顏色\nctx.beginPath()\nctx.rect(60, 60, 80, 80)  # 第二個矩形的位置和大小\nctx.stroke()\n\nctx.strokeStyle = \'black\'  # 圓形邊框顏色\nctx.beginPath()\nctx.arc(center_x1, center_y1, radius1, 0, 2 * 3.14159)  # 第一個圓\nctx.stroke()\n\nctx.beginPath()\nctx.arc(center_x2, center_y2, radius2, 0, 2 * 3.14159)  # 第二個圓\nctx.stroke() \n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w14_ex', 'text': '請根據兩個圓繪圖所圍成的 區域 (目前圍成三個區域, 但若圓心移動可能彼此獨立)進行不同顏色著色, 條件是當各圓半徑與圓心座標變動時, 程式只需輸入兩個圓的圓心座標與半徑, 就可以完成各區域的著色任務. \n 解 \n from browser import html\nfrom browser import document as doc\nimport math\n\n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width=600, height=600)  # 调整画布大小以容纳圆形\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\nctx = canvas.getContext("2d")\n\ngrid_size = 10\nctx.lineWidth = 1\n\n# HTML 表单，用于用户输入圆心和半径\ndef create_input_form():\n    # 创建表单元素\n    form_div = html.DIV(id="form-div")\n    form_div <= html.H3("请输入圆心坐标和半径:")\n    \n    # 创建输入框和标签\n    form_div <= html.LABEL("第一个圆心X坐标: ")\n    form_div <= html.INPUT(id="circle1_center_x", value="200")  # 默认值200\n    form_div <= html.BR()\n    \n    form_div <= html.LABEL("第一个圆心Y坐标: ")\n    form_div <= html.INPUT(id="circle1_center_y", value="200")  # 默认值200\n    form_div <= html.BR()\n    \n    form_div <= html.LABEL("第一个圆半径: ")\n    form_div <= html.INPUT(id="circle1_radius", value="141.4")  # 默认值141.4\n    form_div <= html.BR()\n    \n    form_div <= html.LABEL("第二个圆心X坐标: ")\n    form_div <= html.INPUT(id="circle2_center_x", value="300")  # 默认值300\n    form_div <= html.BR()\n    \n    form_div <= html.LABEL("第二个圆心Y坐标: ")\n    form_div <= html.INPUT(id="circle2_center_y", value="300")  # 默认值300\n    form_div <= html.BR()\n    \n    form_div <= html.LABEL("第二个圆半径: ")\n    form_div <= html.INPUT(id="circle2_radius", value="141.4")  # 默认值141.4\n    form_div <= html.BR()\n\n    form_div <= html.LABEL("第三个圆心X坐标: ")\n    form_div <= html.INPUT(id="circle3_center_x", value="400")  # 默认值400\n    form_div <= html.BR()\n\n    form_div <= html.LABEL("第三个圆心Y坐标: ")\n    form_div <= html.INPUT(id="circle3_center_y", value="400")  # 默认值400\n    form_div <= html.BR()\n\n    form_div <= html.LABEL("第三个圆半径: ")\n    form_div <= html.INPUT(id="circle3_radius", value="141.4")  # 默认值141.4\n    form_div <= html.BR()\n    \n    # 创建提交按钮\n    form_div <= html.BUTTON("提交", id="submit-btn")\n    \n    brython_div <= form_div\n\n# 获取用户输入的圆心和半径\ndef get_user_input():\n    circle1_center_x = float(doc["circle1_center_x"].value)\n    circle1_center_y = float(doc["circle1_center_y"].value)\n    circle1_radius = float(doc["circle1_radius"].value)\n    \n    circle2_center_x = float(doc["circle2_center_x"].value)\n    circle2_center_y = float(doc["circle2_center_y"].value)\n    circle2_radius = float(doc["circle2_radius"].value)\n    \n    circle3_center_x = float(doc["circle3_center_x"].value)\n    circle3_center_y = float(doc["circle3_center_y"].value)\n    circle3_radius = float(doc["circle3_radius"].value)\n    \n    return (circle1_center_x, circle1_center_y, circle1_radius), (circle2_center_x, circle2_center_y, circle2_radius), (circle3_center_x, circle3_center_y, circle3_radius)\n\n# 画多个圆并填充区域\ndef draw_circles_and_fill_regions(circle1_center, circle1_radius, circle2_center, circle2_radius, circle3_center, circle3_radius):\n    # 清除画布，防止重叠\n    ctx.clearRect(0, 0, 600, 600)\n    \n    # 绘制三个圆并填充其区域\n    ctx.strokeStyle = \'black\'\n    \n    # 第一个圆\n    ctx.fillStyle = \'green\'  # 第一个圆的填充颜色\n    ctx.beginPath()\n    ctx.arc(circle1_center[0], circle1_center[1], circle1_radius, 0, 2 * math.pi)\n    ctx.fill()  # 填充圆\n    ctx.stroke()\n\n    # 第二个圆\n    ctx.fillStyle = \'red\'  # 第二个圆的填充颜色\n    ctx.beginPath()\n    ctx.arc(circle2_center[0], circle2_center[1], circle2_radius, 0, 2 * math.pi)\n    ctx.fill()  # 填充圆\n    ctx.stroke()\n\n    # 第三个圆\n    ctx.fillStyle = \'yellow\'  # 第三个圆的填充颜色\n    ctx.beginPath()\n    ctx.arc(circle3_center[0], circle3_center[1], circle3_radius, 0, 2 * math.pi)\n    ctx.fill()  # 填充圆\n    ctx.stroke()\n\n    # 判断点是否在第一个圆内\n    def point_in_circle1(x, y):\n        cx, cy, r = circle1_center[0], circle1_center[1], circle1_radius\n        return (x - cx) ** 2 + (y - cy) ** 2 < r ** 2\n\n    # 判断点是否在第二个圆内\n    def point_in_circle2(x, y):\n        cx, cy, r = circle2_center[0], circle2_center[1], circle2_radius\n        return (x - cx) ** 2 + (y - cy) ** 2 < r ** 2\n    \n    # 判断点是否在第三个圆内\n    def point_in_circle3(x, y):\n        cx, cy, r = circle3_center[0], circle3_center[1], circle3_radius\n        return (x - cx) ** 2 + (y - cy) ** 2 < r ** 2\n\n    # 根据区域确定颜色\n    def get_region_color(x, y):\n        # 判断点在哪些圆内\n        in_circle1 = point_in_circle1(x, y)\n        in_circle2 = point_in_circle2(x, y)\n        in_circle3 = point_in_circle3(x, y)\n\n        # 三个区域：\n        if in_circle1 and not in_circle2 and not in_circle3:\n            return \'green\'  # 只在第一个圆内，填充绿色\n        elif in_circle2 and not in_circle1 and not in_circle3:\n            return \'red\'  # 只在第二个圆内，填充红色\n        elif in_circle3 and not in_circle1 and not in_circle2:\n            return \'yellow\'  # 只在第三个圆内，填充黄色\n        elif in_circle1 and in_circle2 and not in_circle3:\n            return \'blue\'  # 在两个圆交集区域，填充蓝色\n        elif in_circle1 and in_circle3 and not in_circle2:\n            return \'purple\'  # 在第一个和第三个圆交集区域，填充紫色\n        elif in_circle2 and in_circle3 and not in_circle1:\n            return \'orange\'  # 在第二个和第三个圆交集区域，填充橙色\n        elif in_circle1 and in_circle2 and in_circle3:\n            return \'brown\'  # 在三个圆交集区域，填充棕色\n        else:\n            return None  # 三个圆之外不填充\n\n    # 扫描并填充区域\n    def scan_and_draw():\n        for x in range(0, 600, grid_size):  # 遍历画布范围，左到右\n            for y in range(0, 600, grid_size):  # 从上到下\n                color = get_region_color(x, y)  # 获取当前点的区域颜色\n                if color:  # 只有当颜色不为 None 时才绘制\n                    # 绘制填充的矩形\n                    ctx.fillStyle = color\n                    ctx.fillRect(x, y, grid_size, grid_size)  # 填充一个区域的矩形，而不是小圆点\n\n    # 开始扫描并绘制颜色\n    scan_and_draw()\n\n# 创建输入表单\ncreate_input_form()\n\n# 设置点击提交按钮的事件\ndef on_submit(event):\n    # 获取用户输入的圆心坐标和半径\n    circle1_center, circle2_center, circle3_center = get_user_input()\n\n    # 调用函数绘制圆并填充区域\n    draw_circles_and_fill_regions(\n        circle1_center[0:2], circle1_center[2],\n        circle2_center[0:2], circle2_center[2],\n        circle3_center[0:2], circle3_center[2]\n    )\n\n# 绑定点击提交按钮事件\ndoc["submit-btn"].bind("click", on_submit) \n', 'tags': '', 'url': 'w14_ex.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': "每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n w7 \n def print_pyramid(n):\n    for i in range(n):\n        # 打印空格\n        print(' ' * (n - i - 1), end='')\n        # 打印星号\n        print('*' * (2 * i + 1))\n\n# 设置金字塔高度\nheight = 5\nprint_pyramid(height)\ndef print_pyramid(n):\n    for i in range(n):\n        # 打印空格\n        for j in range(n - i - 1):\n            print(' ', end='')\n        # 打印星号\n        for j in range(2 * i + 1):\n            print('*', end='')\n        print()  # 换行 \n", 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};