/**
 * MIT License
 *
 * Copyright (C) 2023 Huawei Device Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

#pragma once
#include <react/renderer/components/view/ViewEventEmitter.h>
#include <jsi/jsi.h>

namespace facebook {
    namespace react {

        class JSI_EXPORT RNCSafeAreaProviderEventEmitter : public ViewEventEmitter {
        public:
            using ViewEventEmitter::ViewEventEmitter;

            struct OnInsetsChangeInsets {
                double top;
                double right;
                double bottom;
                double left;
            };

            struct OnInsetsChangeFrame {
                double x;
                double y;
                double width;
                double height;
            };

            struct OnInsetsChange {
                OnInsetsChangeInsets insets;
                OnInsetsChangeFrame frame;
            };

            void onInsetsChange(OnInsetsChange value) const;
        };

        class JSI_EXPORT RNCSafeAreaViewEventEmitter : public ViewEventEmitter {
        public:
            using ViewEventEmitter::ViewEventEmitter;
        };

    } // namespace react
} // namespace facebook