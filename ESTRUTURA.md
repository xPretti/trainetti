src/
│
├── app/ # 🌐 Composition / React
│ ├── App.tsx
│ ├── AppProvider.tsx
│ └── navigation/
│ └── ...
│
├── pages/ # 📱 Telas
│ ├── profiles/
│ │ ├── ProfilesPage.tsx
│ │ └── ProfilePage.tsx
│ │
│ ├── workouts/
│ │ ├── WorkoutPage.tsx
│ │ └── WorkoutHistoryPage.tsx
│ │
│ └── settings/
│ └── SettingsPage.tsx
│
├── components/ # 🧩 Componentes reutilizáveis
│ ├── ui/
│ │ ├── Button.tsx
│ │ ├── Input.tsx
│ │ ├── Modal.tsx
│ │ └── ...
│ │
│ └── layout/
│ ├── Header.tsx
│ └── Layout.tsx
│
├── features/ # 🎯 Comportamentos da UI
│ ├── profiles/
│ │ ├── components/
│ │ ├── hooks/
│ │ └── profile.utils.ts
│ │
│ ├── workouts/
│ │ ├── components/
│ │ ├── hooks/
│ │ └── workout.utils.ts
│ │
│ └── settings/
│ ├── components/
│ └── hooks/
│
├── stores/ # 🧠 Estado reativo da UI
│ ├── workout/
│ │ ├── createWorkoutStore.ts
│ │ └── WorkoutStoreProvider.tsx
│ │
│ ├── settings/
│ │ ├── createSettingsStore.ts
│ │ └── SettingsStoreProvider.tsx
│ │
│ └── ...
│
├── application/ # ⚙️ "Backend" da aplicação
│ ├── Application.ts
│ │
│ ├── services/
│ │ ├── ProfileService.ts
│ │ ├── WorkoutService.ts
│ │ └── ExerciseService.ts
│ │
│ └── processors/
│ ├── WorkoutProcessor.ts
│ └── ...
│
├── domain/ # 🧠 Regras e modelos
│ ├── profile/
│ │ ├── Profile.ts
│ │ └── ProfileRules.ts
│ │
│ ├── workout/
│ │ ├── Workout.ts
│ │ └── WorkoutRules.ts
│ │
│ └── exercise/
│ ├── Exercise.ts
│ └── ExerciseRules.ts
│
├── infrastructure/ # 💾 Implementações concretas
│ ├── database/
│ │ ├── Database.ts
│ │ ├── migrations/
│ │ └── sqlite/
│ │
│ └── repositories/
│ ├── ProfileRepository.ts
│ ├── WorkoutRepository.ts
│ ├── ExerciseRepository.ts
│ └── SettingsRepository.ts
│
├── contexts/ # 🔌 Contextos React específicos
│ └── ...
│
├── hooks/ # 🪝 Hooks globais
│ └── ...
│
├── types/ # Tipos realmente compartilhados
│ └── ...
│
└── utils/ # Utilidades genéricas
└── ...
