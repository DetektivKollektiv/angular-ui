import { Review } from 'src/app/review-item/model/review';

export const mock_review: Review = {
  id: 'b8ce1a68-c951-455f-a0d0-26be95d54c74',
  user_id: '1dd2fa3b-eb7d-42f9-b131-24ad56eecc3e',
  item_id: 'item-12345',
  review_state: 0,
  status: 'in_progress',
  questions: [
    // ========================================================================
    // SLIDE 1: INHALTSTYP (Chip - Multi-Select)
    // ========================================================================
    {
      id: 'content_type_slide',
      metadata: {
        title: 'Inhaltstyp',
        text: 'Du hast die Bearbeitung dieses Falls gestartet. Bitte lies dir alle Aussagen durch und bewerte sie sorgfältig.',
        help_url: '',
        indent_level: 0
      },
      fields: [
        {
          id: 'content_type',
          type: 'chip',
          question: 'Worum handelt es sich bei dem Fall?',
          options: [
            { id: 'nachrichtenartikel', text: 'Nachrichtenartikel' },
            { id: 'chat_post', text: 'Chatnachricht/Social Media Post' },
            { id: 'satire', text: 'Satire' },
            { id: 'fake_website', text: 'Fake-Website' },
            { id: 'opinion', text: 'Meinungsbeitrag/Kommentar' },
            { id: 'werbung', text: 'Werbung' },
            { id: 'pressemitteilung', text: 'Pressemitteilung' },
            { id: 'video', text: 'Video' },
            { id: 'bild', text: 'Bild' },
            { id: 'other', text: 'Other' }
          ],
          answer_value: ['nachrichtenartikel'], // Ausgewählt
          is_disabled: false
        }
      ]
    },

    // ========================================================================
    // SLIDE 2: KRITERIUM INHALTE (5x Traffic Light)
    // ========================================================================
    {
      id: 'content_criteria_slide',
      metadata: {
        title: 'Inhalte',
        text: 'Bewerte die folgenden Aussagen sorgfältig.',
        help_url: '',
        indent_level: 0
      },
      fields: [
        {
          id: 'grammar',
          type: 'traffic-light',
          options: [
            {
              id: 'grammar_opt',
              question: 'Die Grammatik und Rechtschreibung des Artikels sind fehlerfrei.'
            }
          ],
          answer_value: null, // Noch nicht beantwortet
          is_disabled: false
        },
        {
          id: 'structure',
          type: 'traffic-light',
          options: [
            {
              id: 'structure_opt',
              question: 'Der Artikel ist keine Eilnachricht. Er besteht aus mehreren Paragraphen.'
            }
          ],
          answer_value: null,
          is_disabled: false
        },
        {
          id: 'headline',
          type: 'traffic-light',
          options: [
            {
              id: 'headline_opt',
              question: 'Die Überschrift passt zum Inhalt des Artikels.'
            }
          ],
          answer_value: null,
          is_disabled: false
        },
        {
          id: 'objectivity',
          type: 'traffic-light',
          options: [
            {
              id: 'objectivity_opt',
              question: 'Der Artikel ist objektiv geschrieben und frei von Hetze, Generalisierungen, Panikmache oder Ähnlichem.'
            }
          ],
          answer_value: null,
          is_disabled: false
        },
        {
          id: 'perspectives',
          type: 'traffic-light',
          options: [
            {
              id: 'perspectives_opt',
              question: 'Im Artikel werden unterschiedliche Positionen dargestellt.'
            }
          ],
          answer_value: null,
          is_disabled: false
        }
      ]
    },

    // ========================================================================
    // SLIDE 3: KRITERIUM QUELLE (4x Traffic Light)
    // ========================================================================
    {
      id: 'source_criteria_slide',
      metadata: {
        title: 'Quelle',
        text: 'Bewerte die folgenden Aussagen sorgfältig.',
        help_url: '',
        indent_level: 0
      },
      fields: [
        {
          id: 'external_sources',
          type: 'traffic-light',
          options: [
            {
              id: 'external_sources_opt',
              question: 'Im Artikel werden für alle Behauptungen externe Quellen genannt.'
            }
          ],
          answer_value: null,
          is_disabled: false
        },
        {
          id: 'claims_match_sources',
          type: 'traffic-light',
          options: [
            {
              id: 'claims_match_sources_opt',
              question: 'Die Behauptungen des Artikels decken sich vollständig mit denen der Originalquellen.'
            }
          ],
          answer_value: null,
          is_disabled: false
        },
        {
          id: 'public_media_match',
          type: 'traffic-light',
          options: [
            {
              id: 'public_media_match_opt',
              question:
                'Die Behauptungen des Artikels decken sich mit der Berichterstattung öffentlich-rechtlicher Medien und/oder Fachmedien.'
            }
          ],
          answer_value: null,
          is_disabled: false
        },
        {
          id: 'author_credentials',
          type: 'traffic-light',
          options: [
            {
              id: 'author_credentials_opt',
              question: 'Der Artikel ist von einer fachkundigen Person oder einer*m beruflichen Journalist*in geschrieben.'
            }
          ],
          answer_value: null,
          is_disabled: false
        }
      ]
    },

    // ========================================================================
    // SLIDE 4: BILDER (Placeholder - kann weitere Fields haben)
    // ========================================================================
    {
      id: 'images_slide',
      metadata: {
        title: 'Bilder',
        text: 'Bewerte die Bilder im Artikel.',
        help_url: '',
        indent_level: 0
      },
      fields: [
        {
          id: 'images_quality',
          type: 'traffic-light',
          options: [
            {
              id: 'images_quality_opt',
              question: 'Die Bilder sind relevant und unterstützen den Inhalt.'
            }
          ],
          answer_value: null,
          is_disabled: false
        }
      ]
    },

    // ========================================================================
    // SLIDE 5: ERGÄNZENDE BEWERTUNGSKRITERIEN (Likert Scale)
    // ========================================================================
    {
      id: 'evaluation_criteria_slide',
      metadata: {
        title: 'Bewertungskriterien',
        text: 'Hinweis: Im Rahmen dieses Tests, kann nur ein *sonstiger* Punkt angegeben werden. Falls du mehrere Punkte angeben willst, wähle bitte den gravierendsten aus. Später wird es die Möglichkeit geben, hier auch mehrere Punkte aufzuführen.',
        help_url: '',
        indent_level: 0
      },
      fields: [
        {
          id: 'additional_rating',
          type: 'likert-scale',
          question: 'Ist dir sonst noch etwas aufgefallen, das in die Bewertung einfliessen sollte?',
          options: [
            {
              id: 'positive',
              text: 'Ja, etwas positives',
              description: '',
              color: '#22c55e',
              value: 0
            },
            {
              id: 'minor_issue',
              text: 'Ja, ein kleiner Mangel',
              description: '',
              color: '#eab308',
              value: 1
            },
            {
              id: 'major_issue',
              text: 'Ja, ein großer Mangel',
              description: '',
              color: '#f97316',
              value: 2
            },
            {
              id: 'critical_error',
              text: 'Ja, ein gravierender Fehler',
              description: '',
              color: '#ef4444',
              value: 3
            },
            {
              id: 'nothing',
              text: 'Nein',
              description: '',
              color: '#9ca3af',
              value: 4
            }
          ],
          answer_value: null, // Noch nicht beantwortet
          is_disabled: false
        }
      ]
    },

    // ========================================================================
    // SLIDE 6: ZUSATZ (TextArea - Eingerückt, Conditional)
    // ========================================================================
    {
      id: 'additional_comment_slide',
      metadata: {
        title: 'Zusatz',
        text: 'Versuche den Faktor möglichst kurz und knapp zu beschreiben. Du hast gleich noch mehr Platz für einen ausführlichen Fallbewertungskommentar.',
        help_url: '',
        indent_level: 1 // EINGERÜCKT unter "Bewertungskriterien"
      },
      fields: [
        {
          id: 'additional_comment',
          type: 'text-area',
          question: 'Was ist dir aufgefallen?',
          options: [
            {
              id: 'comment_field',
              placeholder: 'Type your answer here...',
              max_length: 500
            }
          ],
          answer_value: null,
          is_disabled: false
        }
      ],
      conditions: [
        {
          question: 'evaluation_criteria_slide',
          option: 'additional_rating',
          operator: '<',
          value: 4 // Zeige nur wenn NICHT "Nein" (value 4) gewählt wurde
        }
      ]
    },

    // ========================================================================
    // SLIDE 7: FALL ABSCHLIESSEN (Kein Field, nur Submit)
    // ========================================================================
    {
      id: 'submit_slide',
      metadata: {
        title: 'Fall abschließen',
        text: 'Überprüfe deine Angaben und schließe den Fall ab.',
        help_url: '',
        indent_level: 0
      },
      fields: [] // Kein Field - nur Submit-Button im Frontend
    }
  ]
};

