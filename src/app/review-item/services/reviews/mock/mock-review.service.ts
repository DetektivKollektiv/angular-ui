import { Review } from 'src/app/review-item/model/review';

export const mock_review = {
  id: 'b8ce1a68-c951-455f-a0d0-26be95d54c74',
  is_peer_review: false,
  belongs_to_good_pair: null,
  user_id: '1dd2fa3b-eb7d-42f9-b131-24ad56eecc3e',
  start_timestamp: '',
  finish_timestamp: '',
  comment: null,
  questions: [
    {
      answer_id: '129e318e-774e-41d8-a474-5d4c602c2117',
      question_id: 'claim_7',
      content: 'Bilder (falls vorhanden) haben einen Bezug zur Aussage. Sie dramatisieren oder skandalisieren nicht.',
      info: 'Um Behauptungen glaubw\u00fcrdiger erscheinen zu lassen, werden manchmal veraltete oder aus anderen Kontexten stammende Fotos, Bilder oder Videos gezeigt.',
      hint: 'Nutze die umgekehrte Bildersuche bzw. Reverse Image Search - z.B. <a href="https://tineye.com/" target="_blank">TinEye</a>, um zu sehen, ob die Fotos authentisch sind und nicht aus anderen Kontexten stammen. Werden z.B f\u00fcr eine Demonstration in Berlin Bilder einer anderen, gr\u00f6\u00dferen Demonstration in einem anderen Land gezeigt? Wenn es sich um <a href="https://de.wikipedia.org/wiki/Stockfotografie" target="_blank">Stock Fotos</a> handelt, visualisieren sie den Beitrag neutral oder dramatisieren sie ihn?',
      lower_bound: null,
      upper_bound: null,
      parent_question_id: null,
      max_children: 0,
      answer_value: null,
      comment: null,
      options: [
        { id: '4', text: 'Stimme zu', value: 4, tooltip: null },
        { id: '3', text: 'Stimme eher zu', value: 3, tooltip: null },
        { id: '2', text: 'Stimme eher nicht zu', value: 2, tooltip: null },
        { id: '1', text: 'Stimme nicht zu', value: 1, tooltip: null },
        {
          id: '0_bilder',
          text: 'Kriterium nicht anwendbar',
          value: 0,
          tooltip: 'Eine Beurteilung dieser Frage ergibt keinen Sinn, weil es z.B. keine Bilder gibt'
        }
      ]
    },
    {
      answer_id: '3b3f14cc-5da4-48de-a731-2241ae3e0da6',
      question_id: 'claim_1',
      content: 'TEST TEST TEST In der Nachricht werden f\u00fcr alle Behauptungen externe Quellen genannt.',
      info: 'Die Angabe von Quellen f\u00fcr Zitate oder Behauptungen erh\u00f6ht die Glaubw\u00fcrdigkeit der Informationen einer Nachricht. Es kann unglaubw\u00fcrdig sein, dabei nur eigene Quellen zu verwenden.',
      hint: '\u00dcberpr\u00fcfe, ob bei essentiellen Aussagen Quellen angegeben werden. Teilweise sind diese als Fu\u00dfnote oder Link unterhalb der Nachricht zu finden.',
      lower_bound: null,
      upper_bound: null,
      parent_question_id: null,
      max_children: 1,
      answer_value: null,
      comment: null,
      options: [
        { id: '4', text: 'Stimme zu', value: 4, tooltip: null },
        { id: '3', text: 'Stimme eher zu', value: 3, tooltip: null },
        { id: '2', text: 'Stimme eher nicht zu', value: 2, tooltip: null },
        { id: '1', text: 'Stimme nicht zu', value: 1, tooltip: null },
        {
          id: '0_pm',
          text: 'Kriterium nicht anwendbar',
          value: 0,
          tooltip: 'Zum Beispiel, da es sich um eine Pressemitteilung handelt'
        }
      ]
    },
    {
      answer_id: '6d705ad5-ad97-47af-a0be-692ab7b579bf',
      question_id: 'claim_1a',
      content: 'Die Behauptungen in der Nachricht decken sich vollst\u00e4ndig mit denen der Quellen.',
      info: 'Die Angabe von Quellen allein ist kein Garant f\u00fcr die Glaubw\u00fcrdigkeit von Informationen. Quellen werden auch als Alibi genutzt. Bei n\u00e4herer Betrachtung k\u00f6nnen sie den Aussagen einer Nachricht sogar widersprechen.',
      hint: 'Untersuche, ob Zitate oder Behauptungen korrekt wiedergegeben werden. Ist eine Verzerrung der Aussage erkennbar? Wurden Zitate verk\u00fcrzt oder aus dem Zusammenhang gerissen?',
      lower_bound: 2,
      upper_bound: 4,
      parent_question_id: 'claim_1',
      max_children: 0,
      answer_value: null,
      comment: null,
      options: [
        { id: '4', text: 'Stimme zu', value: 4, tooltip: null },
        { id: '3', text: 'Stimme eher zu', value: 3, tooltip: null },
        { id: '2', text: 'Stimme eher nicht zu', value: 2, tooltip: null },
        { id: '1', text: 'Stimme nicht zu', value: 1, tooltip: null }
      ]
    },
    {
      answer_id: 'a0ac2d94-2fd2-48f3-a596-a4b0d3bbfdf7',
      question_id: 'claim_8',
      content: 'Die in der Nachricht verwendeten Zitate stimmen mit ihrem urspr\u00fcnglichen Kontext \u00fcberein.',
      info: 'Manchmal werden Zitate f\u00e4lschlicherweise in einem anderen Zusammenhang verwendet. Zitate k\u00f6nnten auch gek\u00fcrzt worden sein, um eine Aussage zu verzerren. In einer Suchmaschine kannst Du mit Anf\u00fchrungszeichen nach exakt dieser Textpassage suchen.',
      hint: 'Gib das Zitat in Anf\u00fchrungszeichen in einer Internet-Suchmaschine ein und vergleiche die Ergebnisse.',
      lower_bound: null,
      upper_bound: null,
      parent_question_id: null,
      max_children: 0,
      answer_value: null,
      comment: null,
      options: [
        { id: '4', text: 'Stimme zu', value: 4, tooltip: null },
        { id: '3', text: 'Stimme eher zu', value: 3, tooltip: null },
        { id: '2', text: 'Stimme eher nicht zu', value: 2, tooltip: null },
        { id: '1', text: 'Stimme nicht zu', value: 1, tooltip: null },
        {
          id: '0_zitate',
          text: 'Kriterium nicht anwendbar',
          value: 0,
          tooltip:
            'Eine Beurteilung dieser Frage ist nicht m\u00f6glich, weil es keine Zitate gibt oder der urspr\u00fcngliche Kontext der Zitate nicht klar oder zweideutig ist.'
        }
      ]
    },
    {
      answer_id: 'c4848bb9-8c72-44a8-ba70-4f38d85a0979',
      question_id: 'claim_2',
      content: 'Die Grammatik und Rechtschreibung der Nachricht sind fehlerfrei.',
      info: 'Um Informationen schnell in Umlauf zu bringen, werden Texte manchmal maschinell in andere Sprachen \u00fcbersetzt. Fehlerhafte Grammatik oder un\u00fcbliche Satzstellungen k\u00f6nnen hierf\u00fcr ein Indiz sein.',
      hint: 'Pr\u00fcfe, ob es Grammatikfehler (z. B ein fehlender Artikel) oder Rechtschreibfehler gibt, die nicht wie fl\u00fcchtige Tippfehler wirken.',
      lower_bound: null,
      upper_bound: null,
      parent_question_id: null,
      max_children: 0,
      answer_value: null,
      comment: null,
      options: [
        { id: '4', text: 'Stimme zu', value: 4, tooltip: null },
        { id: '3', text: 'Stimme eher zu', value: 3, tooltip: null },
        { id: '2', text: 'Stimme eher nicht zu', value: 2, tooltip: null },
        { id: '1', text: 'Stimme nicht zu', value: 1, tooltip: null },
        { id: '0a', text: 'Kriterium nicht anwendbar', value: 0, tooltip: 'Eine Beurteilung dieser Frage ist nicht m\u00f6glich' }
      ]
    },
    {
      answer_id: 'd01acd35-a319-4589-9828-553adf14f956',
      question_id: 'claim_4',
      content:
        'Die Behauptungen der Nachricht decken sich mit der Berichterstattung in den \u00f6ffentlich-rechtlichen Medien, etablierten Wochenzeitungen und/oder Fachmedien.',
      info: 'Enth\u00e4lt die Nachricht Behauptungen, die bei den professionellen Medienh\u00e4usern - \u00f6ffentlich-rechtliche Medien, etablierte Wochenzeitungen oder Fachmedien - nicht vorkommen? Oder wird etwas behauptet, das professionelle Medien anders darstellen? Beides kann die Glaubw\u00fcrdigkeit der Information mindern.',
      hint: 'Wir empfehlen das Abgleichen mit mindestens zwei gro\u00dfen Tages- oder Wochenzeitungen. Wenn du den Namen eines Mediums und relevante thematische Schl\u00fcsselw\u00f6rter bei einer Suchmaschine eingibst, kannst du die Ergebnisse vergleichen.',
      lower_bound: null,
      upper_bound: null,
      parent_question_id: null,
      max_children: 0,
      answer_value: null,
      comment: null,
      options: [
        { id: '4', text: 'Stimme zu', value: 4, tooltip: null },
        { id: '3', text: 'Stimme eher zu', value: 3, tooltip: null },
        { id: '2', text: 'Stimme eher nicht zu', value: 2, tooltip: null },
        { id: '1', text: 'Stimme nicht zu', value: 1, tooltip: null },
        {
          id: '0_\u00f6r',
          text: 'Kriterium nicht anwendbar',
          value: 0,
          tooltip:
            'Zum Beispiel, wenn keine Berichte von \u00f6ffentlich-rechtlichen Medien existieren, die verglichen werden k\u00f6nnten.'
        }
      ]
    },
    {
      answer_id: 'db409ddb-ea19-4504-bfba-d8f441ff728e',
      question_id: 'claim_6',
      content:
        'Die Nachricht ist m\u00f6glichst objektiv geschrieben und frei von Generalisierungen, Unterstellungen und diskriminierender Sprache.',
      info: 'Stark subjektive, emotional aufgeladene und eventuell herabw\u00fcrdigende Sprache ist ein Indiz daf\u00fcr, dass es sich um eine wenig reflektierte pers\u00f6nliche Darstellung handelt. Dies mindert die Glaubw\u00fcrdigkeit der Aussagen.',
      hint: 'Pr\u00fcfe, ob ein gef\u00fchlsbetonter Schreibstil verwendet wurde. Werden Meinungen oder Gef\u00fchle zum Ausdruck gebracht? Flie\u00dfen politische, emotionale oder geschmackliche Wertungen ein? Als Indiz hierf\u00fcr gelten Superlative (z.B. "die schlimmste Folge"), subjektive Meinungen (z.B. "Ich finde, dass...") oder eine beleidigende bzw. extrem bewundernde Ausdrucksweise.',
      lower_bound: null,
      upper_bound: null,
      parent_question_id: null,
      max_children: 0,
      answer_value: null,
      comment: null,
      options: [
        { id: '3', text: 'Stimme eher zu', value: 3, tooltip: null },
        { id: '2', text: 'Stimme eher nicht zu', value: 2, tooltip: null },
        { id: '1', text: 'Stimme nicht zu', value: 1, tooltip: null },
        { id: '4', text: 'Stimme zu', value: 4, tooltip: null },
        { id: '0_sinn', text: 'Kriterium nicht anwendbar', value: 0, tooltip: 'Eine Beurteilung dieser Frage ergibt keinen Sinn.' }
      ]
    }
  ],
  tags: []
} as Review;

interface ChipOption {
  id: string;
  text: string;
  answer: true | null;
}

interface TraficLightOption {
  id: string;
  question: string;
  answer: 1 | 2 | 3 | 4 | 0 | null;
}

interface LikertScaleOption {
  id: string;
  text: string;
  description: string;
  color: string;
  answer: true | null;
}

interface TextAreaOption {
  id: string;
  placeholder: string;
  max_length: number;
  answer: string | null;
}

interface ChipOptions {
  id: string;
  type: 'chip';
  question: string;
  options: ChipOption[];
  is_disabled: boolean;
}

interface TraficLightOptions {
  id: string;
  type: 'traffic-light';
  options: TraficLightOption[];
  is_disabled: boolean;
}

interface LikertScaleOptions {
  id: string;
  type: 'likert-scale';
  question: string;
  options: LikertScaleOption[];
  is_disabled: boolean;
}

interface TextAreaOptions {
  id: string;
  type: 'text-area';
  question: string;
  options: TextAreaOption[];
  is_disabled: boolean;
}

interface QuestionType {
  id: string;
  title: string;
  text: string;
  options: ChipOptions | TraficLightOptions | LikertScaleOptions | TextAreaOptions;
  help_url: string;
}

interface NewReview {
  id: string;
  user_id: string;
  questions: QuestionType[];
}

export const new_mock_review: NewReview = {
  id: 'b8ce1a68-c951-455f-a0d0-26be95d54c74',
  user_id: '1dd2fa3b-eb7d-42f9-b131-24ad56eecc3e',
  questions: [
    {
      id: 'content_type',
      title: 'Inhaltstyp',
      text: 'Du hast die Bearbeitung dieses Falls gestartet. Bitte lies dir alle Aussagen durch und bewerte sie sorgfältig.',
      options: {
        id: 'content_type_options',
        type: 'chip',
        question: 'Worum handelt es sich bei dem Fall?',
        options: [
          {
            id: 'nachrichtenartikel',
            text: 'Nachrichtenartikel',
            answer: true
          },
          {
            id: 'chat_post',
            text: 'Chatnachricht/Social Media Post',
            answer: null
          },
          {
            id: 'satire',
            text: 'Satire',
            answer: null
          },
          {
            id: 'fake_website',
            text: 'Fake-Website',
            answer: null
          },
          {
            id: 'opinion',
            text: 'Meinungsbeitrag/Kommentar',
            answer: null
          },
          {
            id: 'werbung',
            text: 'Werbung',
            answer: null
          },
          {
            id: 'pressemitteilung',
            text: 'Pressemitteilung',
            answer: null
          },
          {
            id: 'video',
            text: 'Video',
            answer: null
          },
          {
            id: 'bild',
            text: 'Bild',
            answer: null
          },
          {
            id: 'other',
            text: 'Other',
            answer: null
          }
        ],
        is_disabled: false
      },
      help_url: ''
    },
    {
      id: 'medium_questions',
      title: 'Medium',
      text: 'Du hast die Bearbeitung dieses Falls gestartet. Bitte lies dir alle Aussagen durch und bewerte sie sorgfältig.',
      options: {
        id: 'medium_traffic_light',
        type: 'traffic-light',
        options: [
          {
            id: 'grammar',
            question: 'Die Grammatik und Rechtschreibung des Artikels sind fehlerfrei.',
            answer: 1
          },
          {
            id: 'structure',
            question: 'Der Artikel ist keine Eilnachricht. Er besteht aus mehreren Paragraphen.',
            answer: 1
          },
          {
            id: 'headline',
            question: 'Die Überschrift passt zum Inhalt des Artikels.',
            answer: 1
          },
          {
            id: 'objectivity',
            question: 'Die Artikel ist objektiv geschrieben und frei von Hetze, Generalisierungen, Panikmache oder Ähnlichem.',
            answer: 1
          },
          {
            id: 'perspectives',
            question: 'Im Artikel werden unterschiedliche Positionen dargestellt.',
            answer: 1
          }
        ],
        is_disabled: false
      },
      help_url: ''
    },
    {
      id: 'additional_criteria_rating',
      title: 'Ergänzende Bewertungskriterien',
      text: 'Solltest du hier eine Auffälligkeit angeben, kannst du diese im Folgeschritt näher erläutern.',
      options: {
        id: 'additional_rating',
        type: 'likert-scale',
        question: 'Ist dir sonst noch etwas aufgefallen, das in die Bewertung einfließen sollte?',
        options: [
          {
            id: 'positive',
            text: 'Ja',
            description: 'etwas positives',
            color: '#22c55e',
            answer: true
          },
          {
            id: 'minor_issue',
            text: 'Ja',
            description: 'ein kleiner Mangel',
            color: '#eab308',
            answer: null
          },
          {
            id: 'major_issue',
            text: 'Ja',
            description: 'ein großer Mangel',
            color: '#f97316',
            answer: null
          },
          {
            id: 'all_checked',
            text: 'Nein',
            description: 'alles geprüft',
            color: '#9ca3af',
            answer: null
          }
        ],
        is_disabled: false
      },
      help_url: ''
    },
    {
      id: 'additional_criteria_comment',
      title: 'Ergänzende Bewertungskriterien',
      text: 'Solltest du hier eine Auffälligkeit angeben, kannst du diese im Folgeschritt näher erläutern.',
      options: {
        id: 'additional_comment',
        type: 'text-area',
        question: 'Was ist dir aufgefallen?',
        options: [
          {
            id: 'comment_field',
            placeholder: 'Auffällig fand ich, dass ...',
            max_length: 500,
            answer: null
          }
        ],
        is_disabled: false
      },
      help_url: ''
    }
  ]
};
