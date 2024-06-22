# Daniel Iozia - Personal Portfolio Website

Questo è il repository del mio sito web portfolio personale, progettato per mostrare le mie competenze, i miei progetti e il mio percorso professionale come Full Stack Developer.

Il sito è costruito con un approccio moderno e minimale, focalizzato sulle performance e sull'esperienza utente.

## 🚀 Caratteristiche Principali

- **Design Responsivo:** Ottimizzato per desktop, tablet e dispositivi mobili.
- **Dark Mode:** Supporto nativo per il tema scuro con switch automatico/manuale.
- **Modale di Contatto:** Form di contatto integrato con validazione in tempo reale e invio email tramite EmailJS.
- **Animazioni:** Scroll reveal e micro-interazioni per un'esperienza fluida.
- **Sezioni:** Hero, Chi Sono, Skills, Progetti, Esperienza, Formazione, Contatti.

## 🛠️ Tecnologie Utilizzate

- **Frontend:** HTML5, CSS3 (Vanilla con CSS Variables), JavaScript (ES6+).
- **Build Tool:** [Vite](https://vitejs.dev/) per uno sviluppo rapido e build ottimizzate.
- **Email Service:** [EmailJS](https://www.emailjs.com/) per l'invio di email direttamente dal frontend.

## 📋 Prerequisiti

Assicurati di avere installato [Node.js](https://nodejs.org/) (versione 18 o superiore consigliata) sul tuo computer.

## ⚙️ Installazione

1.  Clona il repository:

    ```bash
    git clone https://github.com/tuo-username/tuo-repo.git
    cd tuo-repo
    ```

2.  Installa le dipendenze:

    ```bash
    npm install
    ```

3.  Configura le variabili d'ambiente:
    Crea un file `.env` nella root del progetto e aggiungi le tue chiavi EmailJS:
    ```env
    VITE_PUBLIC_KEY_EMAILJS=la_tua_public_key
    VITE_SERVICE_ID_EMAILJS=il_tuo_service_id
    VITE_TEMPLATE_ID_EMAILJS=il_tuo_template_id
    ```

## ▶️ Avvio in Sviluppo

Per avviare il server di sviluppo locale:

```bash
npm run dev
```

Il sito sarà accessibile all'indirizzo `http://localhost:5173` (o un'altra porta se la 5173 è occupata).

## 📦 Build per la Produzione

Per creare la versione ottimizzata per la produzione:

```bash
npm run build
```

I file generati si troveranno nella cartella `dist`.

## 📂 Struttura del Progetto

```
/
├── index.html          # Entry point HTML
├── package.json        # Dipendenze e script
├── vite.config.js      # Configurazione Vite
├── .env                # Variabili d'ambiente (non committare)
└── src/
    ├── style.css       # Stili globali e componenti
    ├── js/
    │   ├── main.js     # Logica UI (menu, modale, dark mode)
    │   ├── email.js    # Logica invio email e toaster
    │   └── counter.js  # (Opzionale) Logica contatori
    └── assets/         # Immagini, icone e documenti (CV)
```

## 📄 Licenza

Questo progetto è aperto e disponibile sotto licenza MIT.
