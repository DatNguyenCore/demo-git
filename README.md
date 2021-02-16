# demo-git
Các sử dụng git.
============================
### Các thao tác cơ bản với git.
- Tạo tài khoản trên github.
- Tạo dự án trên remote.
- Kết nối git local với git remote.
  + Lệnh: **git remote add origin <url>**
- Đồng bộ code từ server về local từ nhánh master.
  + Lệnh: **git pull origin master --allow-unrelated-histories**
- Đẩy codoe từ local lên server:
  + Lệnh: **git push origin master** (đẩy code lên nhánh master).
  
Sự dụng chuyển màn hình.
============================
> Chú ý:
>  + React Native là thư viện có nhiệm vụ xây dựng giao diện của mobile. Vậy nên React Native không có khả năng chuyển giữa các màn hình trong ứng dụng. 
>  + Để giải quyết vấn đề này, ta phải sử dụng thêm thư viện **[react-navigation](https://reactnavigation.org/docs/getting-started)** phục vụ việc chuyển giữa các màn hình.
> + Các thư viện bên thư ba cài đặt vào dự án React Native được lưu trữ online trên node package manager [NPM](https://www.npmjs.com/). 

### Cài đặt: [hướng dẫn cài đặt thu viện react-navigation cho dự án React Native sử dụng expo](https://reactnavigation.org/docs/getting-started)
- Mở terminal/commanline trong thư mục có chứa dự án.
  + Gõ lệnh: **npm install @react-navigation/native**. 
  + Với lệnh **npm install <tên package>** cài đặt thư viện với tên tương dúng vào dự án và code của thư viện được lưu trữ trong thư mục node_module.
- Cài đặt thư viện giúp tạo ra animation trong việc chuyển màn hình, căn chỉnh layout,...
  + Gõ lệnh: **expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view**
### Sử dụng thư viện react-nativetion.

