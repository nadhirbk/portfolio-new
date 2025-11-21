# 🚀 Portfolio Premium - Ultra Moderne

Un portfolio **époustouflant** et **ultra-moderne** créé avec Next.js 16, TypeScript, Tailwind CSS 4 et Framer Motion.

## ✨ Fonctionnalités

- 🎨 **Design Premium** : Interface moderne avec des dégradés et animations fluides
- 🌊 **Animations Fluides** : Powered by Framer Motion pour des transitions de ouf
- 🎯 **Sections Complètes** :
  - Hero avec effet parallax et orbes animés
  - À propos avec cards interactives
  - Projets avec hover effects impressionnants
  - Compétences avec barres de progression animées
  - Contact avec formulaire stylé
- 🌙 **Dark Mode Ready** : Compatible dark/light mode
- 📱 **Responsive** : Parfaitement adapté mobile, tablette et desktop
- ⚡ **Performance Optimale** : Next.js 16 avec Turbopack
- 🎭 **Composants UI** : shadcn/ui pour un design system pro

## 🛠️ Technologies

- **Next.js 16** - Framework React dernière génération
- **TypeScript** - Pour un code type-safe
- **Tailwind CSS 4** - Styling ultra-moderne
- **Framer Motion** - Animations fluides et performantes
- **shadcn/ui** - Composants UI de qualité
- **Lucide Icons** - Icônes modernes et élégantes

## 🚀 Démarrage Rapide

```bash
# Installation des dépendances
pnpm install

# Lancement du serveur de dev
pnpm dev

# Build pour la production
pnpm build

# Lancement en production
pnpm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet

```
portfolio-new/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout principal avec metadata
│   │   ├── page.tsx         # Page d'accueil avec toutes les sections
│   │   └── globals.css      # Styles globaux et variables Tailwind
│   ├── components/
│   │   ├── ui/              # Composants UI réutilisables
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   └── sections/        # Sections du portfolio
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Projects.tsx
│   │       ├── Skills.tsx
│   │       └── Contact.tsx
│   └── lib/
│       └── utils.ts         # Utilitaires (cn pour Tailwind)
├── public/                  # Assets statiques
└── package.json
```

## 🎨 Personnalisation

### Modifier les projets

Éditez le fichier `src/components/sections/Projects.tsx` pour ajouter/modifier vos projets :

```tsx
const projects = [
  {
    title: 'Votre Projet',
    description: 'Description de votre projet',
    tags: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-purple-500 to-pink-500',
    image: '🚀',
  },
  // ... autres projets
]
```

### Modifier les compétences

Éditez `src/components/sections/Skills.tsx` pour personnaliser vos compétences et niveaux.

### Changer les couleurs

Modifiez le fichier `src/app/globals.css` pour ajuster les couleurs du thème.

## 🌟 Points Forts

- ⚡ **Build ultra-rapide** avec Turbopack
- 🎭 **Animations de ouf** qui impressionnent
- 🎨 **Design qui claque** et professionnel
- 📱 **100% responsive** sur tous les devices
- ♿ **Accessible** avec les bonnes pratiques
- 🔍 **SEO-friendly** avec metadata optimisées

## 📝 License

MIT - Utilise ce projet comme bon te semble !

---

Fait avec ❤️ et beaucoup de ☕
