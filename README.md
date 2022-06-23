# Mio

![alt text](https://dev-shop.itaphoa.com/assets/logo.png)

## Thiết lập Nx workspace

Link tham khảo: [`https://nx.dev/`](https://nx.dev/)

### Khởi chạy project Consumer

- Tạo file .env.local
- Cài đặt thư viện

```bash
yarn
#or
yarn install
```

- Cài đặt Nx CLI

```bash
npm install -g nx
```

- Cài đặt Nx console bằng extension của vscode ( không bắt buộc nhưng nên cài để biết các lệnh trong nx)

- Run project consumer

```bash
yarn consumer:serve (env-cmd -f .env.local npx nx run consumer:serve)
```

- Build project consumer

```bash
yarn consumer:build (env-cmd -f .env.local npx nx build consumer --prod)
```

- Export project consumer

```bash
yarn consumer:export (env-cmd -f .env.local npx nx run consumer:export)
```

### Thiết lập Capacitor cho project Consumer

- Cài đặt thư viện Capacitor ( được custom cho Nx workspace)

```bash
yarn add --save-dev --exact @nxtend/capacitor
```
- Add Capacitor cho 1 project đã tồn tại

```bash
nx generate @nxtend/capacitor:capacitor-project {Capacitor project name} --project {frontend project name}

example: nx generate @nxtend/capacitor:capacitor-project mobile-ap --project mobile-app
```

- Add Platform

```bash
nx run {Capacitor project name}:add --platform {native platform}

example:  nx run mobile-app-cap:add --platform android/ios
```

- Sync project to web from app: ( web phải được export trước khi sync)

```bash
nx run {Capacitor project name}:sync --platform {native platform}

example: nx run mobile-app-cap:sync --platform android/ ios
```

- Open platform

```bash
nx run {Capacitor project name}:sync --platform {native platform}

example: nx run mobile-app-cap:sync --platform android/ios
```

// @ts-ignore : bỏ qua các lỗi liên quan tới cấu trúc bị vi phạm khi dùng typescript
